import React from "react";
import { NavLink } from "react-router";
import styles from "./Nav.module.css";

const navRoutes = [
  { id: crypto.randomUUID(), path: "", title: "Home" },
  { id: crypto.randomUUID(), path: "form", title: "Форма" },
  { id: crypto.randomUUID(), path: "modal", title: "Модалка" },
  { id: crypto.randomUUID(), path: "effect", title: "Ефект" },
  { id: crypto.randomUUID(), path: "clock", title: "Годинник" },
];

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      {navRoutes.map(({ id, path, title }) => (
        <NavLink
          key={id}
          to={`/${path}`}
          className={({ isActive }) => (isActive ? styles.active : null)}
        >
          {" "}
          {title}
        </NavLink>
      ))}
    </nav>
  );
};
