# useRef

КНОПКА STOP НЕ ПРАЦЮЄ !

```jsx
const [time, setTime] = useState(() => new Date().toLocaleTimeString());

//   const ref = useRef(null);

let intervalId = null;

const stop = () => {
  clearInterval(intervalId);
};

useEffect(() => {
  intervalId = setInterval(
    () => setTime(new Date().toLocaleTimeString()),
    1000,
  );
}, []);
```

ПОЯСНЕННЯ:

Коли був class це clearInterval був властивістю класу і воно ініціалізувалось
один раз при створенні екземпляра класа під час виклику. І потім викликався
метод render()

В Функціях тіло виконується коли змінюється або props або state. IntervalId на
кожному рендері буде різна

```jsx
let intervalId = null;

const stop = () => {
  clearInterval(intervalId);
};

useEffect(() => {
  intervalId = setInterval(
    () => setTime(new Date().toLocaleTimeString()),
    1000,
  );
}, []);

console.log(intervalId); - завжди null
```

ВИКОРИСТОВУЄМО useRef() - і досі нічого не робить

Приклад з cleanupFunc всередині useEffect

````jsx
export const Clock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  const intervalId = useRef(null);

  useEffect(() => {
    console.log(time);
    // intervalId.current = setInterval(
    //   () => setTime(new Date().toLocaleTimeString()),
    //   1000,
    // );

    return () => {
      console.log("Функція очистки перед наступним викликом useEffect");
    };
  }, [time]);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  console.log("🚀 ~ Clock ~ intervalId:", intervalId);
  return (
    <div>
      <h1>{time}</h1>

      <button
        type="button"
        onClick={() => setTime(new Date().toLocaleDateString())}
      >
        Update time
      </button>
      <button type="button" onClick={stop}>
        Stop time
      </button>
    </div>
  );
};





## Old way Context

1. createContext

```jsx
import { createContext } from "react";

export default createContext();
````

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

### Modern way in class Component

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
