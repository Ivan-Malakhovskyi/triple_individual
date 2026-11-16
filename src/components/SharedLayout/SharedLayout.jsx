import React from "react";
import { Outlet } from "react-router";
import { AppBar } from "../AppBar";

const SharedLayout = () => {
  return (
    <section>
      <AppBar />

      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default SharedLayout;
