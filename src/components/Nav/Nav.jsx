import React, { useContext } from "react";
import { NavLink } from "react-router";
import authContext from "@/context/auth/context";
import styles from "./Nav.module.css";

const privateRoutes = [
  { id: crypto.randomUUID(), title: "Search games", path: "search_games" },
  { id: crypto.randomUUID(), title: "About", path: "about" },
];

const publicRoutes = [
  { id: crypto.randomUUID(), title: "Login", path: "login" },
];

const Nav = () => {
  const { isLoggedIn } = useContext(authContext);

  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.active}` : `${styles.navLink}`
        }
        to="/"
      >
        Home{" "}
      </NavLink>
      {!isLoggedIn ? (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.active}` : `${styles.navLink}`
          }
          to={`/login`}
        >
          Login
        </NavLink>
      ) : (
        privateRoutes.map(({ id, title, path }) => (
          <NavLink
            key={id}
            className={({ isActive }) =>
              isActive ? `${styles.active}` : `${styles.navLink}`
            }
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
