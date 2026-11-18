```jsx
<BrowserRouter basename="/triple_individual">
  <AuthProvider>
    <App />
  </AuthProvider>
</BrowserRouter>
```

```jsx
<div style={containerStyles}>
  <AppBar />

  <Routes>
    <Route path="/" element={<section>HOME </section>} />
    <Route path="/signup" element={<SignupForm />} />

    <Route
      path="/colorpicker"
      element={<ColorPicker options={colorPickerOptions} />}
    />

    <Route path="/counter" element={<Counter />} />

    <Route path="/clock" element={<Clock />} />

    <Route path="/pokemon" element={<PokemonView />} />
  </Routes>
</div>
```

Navigation

```jsx
import React, { useContext } from "react";
import { NavLink } from "react-router";
import styles from "./Navigation.module.css";
import authContext from "../../context/auth/context";

const nav = [
  { id: 3, title: "Колорпікер", path: "colorpicker" },
  { id: 4, title: "Лічильник", path: "counter" },
  { id: 5, title: "Годинник", path: "clock" },
  { id: 6, title: "Покемони", path: "pokemon" },
];

const Navigation = () => {
  const { isLoggedIn } = useContext(authContext);

  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${styles.activeLink}` : `${styles.link}`
        }
        to="/"
      >
        Home{" "}
      </NavLink>
      {isLoggedIn ? (
        nav.map(({ id, title, path }) => (
          <NavLink
            key={id}
            className={({ isActive }) =>
              isActive ? `${styles.activeLink}` : `${styles.link}`
            }
            to={`/${path}`}
          >
            {title}
          </NavLink>
        ))
      ) : (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.activeLink}` : `${styles.link}`
            }
            to="/signup"
          >
            SignUp{" "}
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
```
