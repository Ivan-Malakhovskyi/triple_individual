import React from "react";
import { Routes, Route, Link } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { Clock } from "./components/Clock/Clock";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Hooks</h1>} />
        <Route path="clock" element={<Clock />} />

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
