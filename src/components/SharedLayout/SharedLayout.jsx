import React, { Suspense } from "react";
import { Outlet } from "react-router";
import { AppBar } from "../AppBar";
import { Loader } from "../Loader";
import styles from "./SharedLayout.module.css";

export const SharedLayout = () => {
  return (
    <div className={styles.wrapper}>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
