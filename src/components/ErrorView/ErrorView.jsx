import React from "react";
import styles from "./ErrorView.module.css";
import error from "../../assets/error.jpg";

export const ErrorView = ({ message }) => {
  return (
    <div>
      <div className={styles.box}>
        <img src={error} alt="error" width={100} />
        <p>{message}</p>
      </div>
    </div>
  );
};
