import React, { useCallback, useState } from "react";
import { Routes, Route, Link } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { Counter } from "./components/Counter/Counter";
import { Friends } from "./components/Friends/Friends";
import { Child } from "./components/Child";

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("RENDER in APP");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <section>
              <h1>Hooks</h1>
              <p>{count}</p>

              <button type="button" onClick={() => setCount(prev => prev + 1)}>
                Increment
              </button>

              <Child onClick={handleClick} />
            </section>
          }
        />

        <Route path="counter" element={<Counter />} />
        <Route path="friends" element={<Friends />} />
        {/* <Route path="callback" element={<Child />} /> */}

        <Route
          path="*"
          element={
            <section>
              <Link to="/">⬅️ Home</Link>
              <h1>Not found page</h1>
            </section>
          }
        />
      </Route>
    </Routes>
  );
};
