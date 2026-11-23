import { useContext } from "react";
import authContext from "@/components/context/auth/context";
import Nav from "../Nav";
import UserMenu from "../UserMenu";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  const { isLoggedIn, onLogOut, user, onLogIn } = useContext(authContext);

  return (
    <header className={styles.header}>
      <Nav />
      {isLoggedIn ? (
        <UserMenu onLogOut={onLogOut} user={user} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Залогінитись
        </button>
      )}
    </header>
  );
};
