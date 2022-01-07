import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <NavLink className={styles.NavigationItem} to="/" activeclassname={styles.Active} className={styles.Home}>Home</NavLink>
      <NavLink className={styles.NavigationItem} to='/movies' activeclassname={styles.Active} className={styles.Movies}>Movies</NavLink>
    </div>
  );
};

export default Navigation;