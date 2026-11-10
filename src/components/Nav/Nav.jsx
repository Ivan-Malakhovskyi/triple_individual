import React from "react";
import { Link } from "react-router";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
};
