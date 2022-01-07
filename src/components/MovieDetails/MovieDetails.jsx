import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./MovieDetails.module.css"


const MovieDetails = ({ movie }) => {
  const { id, title, overview, vote_average, genres, poster_path } = movie;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={styles.MovieContainer}>
      <button className={styles.ButtonBack} onClick={goBack}>Go back</button>
      <div className={styles.Wrapper}>
        {poster_path !== undefined ? (
          <img className={styles.MoviePoster}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`${title} movie poster`}
          />
        ) : (
      <p>Poster not available</p>
        )}
        <div>
          <h1 className={styles.OrginalTitle}>{title}</h1>
          <p className={styles.VoteAverage}>User Score: {vote_average*10}%</p>
          <h2 className={styles.OverviewTitle}>Overview</h2>
          <p className={styles.OverviewDescription}>{overview}</p>
          <h2 className={styles.GenresTitle}>Genres</h2>
          <p className={styles.GenresDescription}>{genres?.map(({ name }) => name + ", ")}</p>
        </div>
      </div>
      <div>
        <ul className={styles.ListLink}>
          <li className={styles.ListItem}>
            <Link className={styles.ListLink} to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li className={styles.ListItem}>
            <Link className={styles.ListLink} to={`/movies/${id}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet/>
      </div>
    </div>
  );
};

export default MovieDetails;