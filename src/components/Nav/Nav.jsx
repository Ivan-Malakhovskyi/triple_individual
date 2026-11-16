import React from "react";
import { NavLink } from "react-router";

import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `${styles.active}` : null)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? `${styles.active}` : null)}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? `${styles.active}` : null)}
      >
        Products
      </NavLink>
    </nav>
  );
};
