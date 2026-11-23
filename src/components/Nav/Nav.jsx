import React, { useContext } from "react";
import { NavLink } from "react-router";
import authContext from "@/components/context/auth/context";
import styles from "./Nav.module.css";

const privateRoutes = [
  { id: crypto.randomUUID(), title: "Games", path: "games" },
];

const publicRoutes = [
  { id: crypto.randomUUID(), title: "Login", path: "login" },
];

const Nav = () => {
  const { isLoggedIn } = useContext(authContext);

  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? `${styles.active}` : null)}
        to="/"
      >
        Home{" "}
      </NavLink>
      {!isLoggedIn ? (
        <NavLink
          className={({ isActive }) => (isActive ? `${styles.active}` : null)}
          to={`/login`}
        >
          Login
        </NavLink>
      ) : (
        privateRoutes.map(({ id, title, path }) => (
          <NavLink
            key={id}
            className={({ isActive }) => (isActive ? `${styles.active}` : null)}
            to={`/${path}`}
          >
            {title}
          </NavLink>
        ))
      )}
    </nav>
  );
};

export default Nav;
