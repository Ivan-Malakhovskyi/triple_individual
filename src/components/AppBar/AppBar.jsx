import React from "react";
import { Nav } from "../Nav/Nav";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
};
