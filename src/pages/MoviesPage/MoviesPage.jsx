import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../../utils/apiCalls";
import styles from "./MoviesPage.module.css"

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query");
  const searchMovie = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formQuery = form.elements.query.value;
    if (formQuery === "") {
      return;
    }
    setSearchQuery({ query: formQuery });
    fetchSearchMovies(query, setSearchMovies);
    form.reset();
  };

  useEffect(() => {
    if (query === null) {
      setSearchMovies([]);
      return;
    }
    fetchSearchMovies(query, setSearchMovies);
  }, [query]);

  return (
    <div>
      <form onSubmit={searchMovie}>
        <input type="text" name="query" className={styles.Input}></input>
        <button type="submit" className={styles.SearchButton}>Search Movies...</button>
      </form>
      <ul className={styles.searchMoviesList}>
        {searchMovies.map(({ id, title }) => (
            <li className={styles.searchMoviesItem} key={id}>
              <Link className={styles.searchMoviesLink} to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesPage;