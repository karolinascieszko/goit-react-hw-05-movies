import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <NavLink  to="/" activeclassname={styles.Active} className={styles.Home}>Home</NavLink>
      <NavLink  to='/movies' activeclassname={styles.Active} className={styles.Movies}>Movies</NavLink>
    </div>
  );
};

export default Navigation;