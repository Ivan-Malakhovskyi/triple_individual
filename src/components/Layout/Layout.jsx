import React from "react";
import { Outlet } from "react-router";
import { AppBar } from "../AppBar/AppBar";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <section style={{ marginTop: "40px" }}>
          {" "}
          <Outlet />
        </section>
      </main>
    </>
  );
};
