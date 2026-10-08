# Old way

1. createContext

```jsx
import { createContext } from "react";

export default createContext();
```

2. Create Provider

```jsx
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
```

3. Wrap App

```jsx
<AuthProvider>
  <App />
</AuthProvider>
```

4. Use

```jsx
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
```

## Modern way in class Component

```jsx

  const { isLoggedIn, user, login, logout } = useContext(authContext);

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
```
