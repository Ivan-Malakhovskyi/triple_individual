import React from "react";
import { Routes, Route, Link } from "react-router";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { TestEffect } from "./components/TestEffect";
import { Layout } from "./components/Layout/Layout";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Hooks</h1>} />
        <Route path="form" element={<Form />} />
        <Route
          path="modal"
          element={
            <div>
              <ComponentA /> <ComponentB />
            </div>
          }
        />
        <Route path="effect" element={<TestEffect />} />
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
