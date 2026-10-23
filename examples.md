# useContext

створюємо теку context/auth: context.js

```js
import { createContext } from "react";

export default createContext();
```

AuthProvider.jsx

```jsx
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
```

in App Bar

```js
<AuthProvider>
  <App />
</AuthProvider>;
const { isLoggedIn, user, login, logout } = useContext(authContext);
```

## useReducer

ПОКАЗАТИ RE-EXPORTS

Є компонент Counter, давайте дивитися на нього і рефакторити Form.jsx

### useRef

```jsx
import { useEffect, useRef, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000,
    );

    return () => {
      stop();
      console.log("Функція очистки перед наступним викликом useEffect");
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button type="button" onClick={stop}>
        Stop time
      </button>
    </div>
  );
};
```

#### useMemo

```js
const filteredFriends = (() => {
  console.log("RENDER", new Date());
  return friends.filter(({ name }) => name.toLowerCase().includes(query));
})();
```

```js
const filteredFriends = useMemo(() => {
  console.log("RENDER", new Date());
  return friends.filter(({ name }) => name.toLowerCase().includes(query));
}, [query, friends]);
```
