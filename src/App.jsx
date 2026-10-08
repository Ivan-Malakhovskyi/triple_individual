import React from "react";
import { Routes, Route, Link } from "react-router";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { Layout } from "./components/Layout/Layout";
import { Form } from "./components/Form/Form";
import { Clock } from "./components/Clock/Clock";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Hooks</h1>} />
        <Route path="form" element={<Form />} />
        <Route path="clock" element={<Clock />} />
        <Route
          path="modal"
          element={
            <div>
              <ComponentA /> <ComponentB />
            </div>
          }
        />
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
