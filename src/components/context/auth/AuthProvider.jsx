import { useMemo, useState } from "react";
import authProvider from "./context";
import avatar from "@/assets/react.svg";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setUser({ name: "Andriy", avatar });
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const providerValue = {
    login,
    logout,
    isLoggedIn,
    user,
  };

  return (
    <authProvider.Provider value={providerValue}>
      {children}
    </authProvider.Provider>
  );
};

export default AuthProvider;
