import React, { useContext } from "react";
import styles from "./Navigation.module.css";
import authContext from "../../context/auth/context";

const Navigation = () => {
  const { isLoggedIn } = useContext(authContext);

  return <nav></nav>;
};

export default Navigation;
