import React from "react";
import { NavLink } from "react-router";
import styles from "./Nav.module.css";

const nav = [
  { id: 3, title: "Games", path: "games" },
  { id: 4, title: "Login", path: "login" },
];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : null)}
        to="/"
      >
        Home{" "}
      </NavLink>
      {nav.map(({ id, title, path }) => (
        <NavLink
          key={id}
          className={({ isActive }) => (isActive ? `${styles.active}` : null)}
          to={`/${path}`}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
