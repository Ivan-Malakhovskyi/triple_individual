import React from "react";

import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/products">Products</a>
    </nav>
  );
};
