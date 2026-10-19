import React, { useContext } from "react";
import { Nav } from "../Nav/Nav";
import authContext from "../context/auth/context";
import styles from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
  const { isLoggedIn, user, login, logout } = useContext(authContext);

  return (
    // <authContext.Consumer>
    //   {({ user, login, logout, isLoggedIn }) => (
    <header className={styles.header}>
      <Nav />

      {isLoggedIn ? (
        <UserMenu user={user} onLogout={logout} />
      ) : (
        <button type="button" onClick={login}>
          Login
        </button>
      )}
    </header>
    //   )}
    // </authContext.Consumer>
  );
};
