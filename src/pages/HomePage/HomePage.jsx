import React, { useState, useEffect } from "react";
import PopularMovies from "../../components/PopularMovies/PopularMovies";
import { fetchPopularMovies } from "../../utils/apiCalls";
import styles from "./HomePage.module.css"
const HomePage = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchPopularMovies(setTrending);
  },[]);
  
  return (
    <div className={styles.HomeContainer}>
      <h1 className={styles.HomeHeader}>Trending Today</h1>
      <PopularMovies trending={trending} />
    </div>
  );
};

export default HomePage;