import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { AppBar } from "../AppBar";

export const SharedLayout = () => {
  return (
    <div className="box">
      <AppBar />
      <main>
        <section style={{ marginTop: "40px" }}>
          <Suspense fallback={<h3>Loading ....</h3>}>
            <Outlet />
          </Suspense>
        </section>
      </main>
    </div>
  );
};
