import React, { useMemo, useState } from "react";
import avatar from "@/assets/react.svg";
import authContext from "./context";

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setUser({ name: "User", avatar });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, login, logout };
  }, [user, isLoggedIn]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
};

export default Provider;
