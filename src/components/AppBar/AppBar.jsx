import React from "react";
import Nav from "../Nav/Nav";
import authContext from "../context/auth/context";
import styles from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";

export const AppBar = () => {
  return (
    <authContext.Consumer>
      {({ isLoggedIn, user, login, logout }) => {
        return (
          <header className={styles.header}>
            <Nav />
            {!isLoggedIn ? (
              <button type="button" onClick={login}>
                Login
              </button>
            ) : (
              <UserMenu user={user} onLogout={logout} />
            )}
          </header>
        );
      }}
    </authContext.Consumer>
  );
};
