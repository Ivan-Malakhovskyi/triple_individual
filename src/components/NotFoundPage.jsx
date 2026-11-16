import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section>
      <Link to="/">⬅️ Home</Link>
      <h1>Not found page</h1>
    </section>
  );
};

export default NotFoundPage;
