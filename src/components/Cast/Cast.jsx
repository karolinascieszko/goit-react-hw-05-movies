import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../utils/apiCalls";
import styles from "./Cast.module.css";

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(id, setCast);
  }, [id]);

  return (
    <div>
      <ul className={styles.CastList}>
        {cast.length > 1 ? (
          cast.map(({ id, character, name, profile_path }) => (
            <li className={styles.CastItem} key={id}> 
              {profile_path === null ? (
                <img className={styles.PlaceholderImg}
                  src={`https://fireteller.com/wp-content/uploads/2020/09/Poster_Not_Available2.jpg`}
                  alt={`Lack of ${name}`}
                />
              ) : (
                <img className={styles.PosterCast}
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={`${name}`}
                />
              )}
              <p className={styles.Name}>Name: {name}</p>
              <p className={styles.Character}>Character: {character}</p>
            </li>
          ))
        ) : (
          <p>No cast here</p>
        )}
      </ul>
    </div>
  );
};

export default Cast;
