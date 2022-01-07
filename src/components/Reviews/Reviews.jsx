import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../utils/apiCalls";
import styles from "./Reviews.module.css"

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchMovieReviews(id, setReviews);
  }, [id]);

  return (
    <div className={styles.ReviewsContainer}>
      {reviews.length > 1 ? (
       <ul className={styles.ReviewsList}>
          {reviews.map(({author, content, id}) => (
          <li className={styles.ReviewsItem} key={id}>
            <p className={styles.ReviewsAuthor}>Author: {author}</p>
            <p className={styles.ReviewsDescription}>{content}</p>
          </li>
          ))}
        </ul>
      ) : (
       <p> No reviews available </p>
      )}
    </div>
  );
};

export default Reviews;