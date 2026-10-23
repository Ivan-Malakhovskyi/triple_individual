import { Nav } from "../Nav/Nav";
import styles from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import avatar from "../../assets/react.svg";

export const AppBar = () => {
  return (
    <header className={styles.header}>
      <Nav />

      <UserMenu user={{ avatar, name: "Bob" }} onLogout={() => {}} />

      <button type="button" onClick={() => {}}>
        Login
      </button>
    </header>
  );
};
