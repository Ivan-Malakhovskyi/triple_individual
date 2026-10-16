import React from "react";
import styles from "./UserMenu.module.css";

export const UserMenu = ({ user, onLogout }) => {
  return (
    <div className={styles.user_info}>
      <p>{user.name}</p>

      <img src={user.avatar} alt="" width={30} height={30} />

      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
