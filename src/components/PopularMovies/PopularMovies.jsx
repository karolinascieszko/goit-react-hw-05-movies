import React from "react";
import { Link } from "react-router-dom";
import styles from "./PopularMovies.module.css"

const PopularMovies = ({ trending }) => {
  return (
    <ul className={styles.PopularMoviesList}>
      {trending.map((movie) => (
        <li className={styles.PopularMovie} key={movie.id}>
          <Link className={styles.Link} to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularMovies;