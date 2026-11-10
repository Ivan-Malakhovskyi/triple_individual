import React from "react";
import { Link, Outlet } from "react-router";

const About = () => {
  return (
    <h1>
      About Pages
      <nav>
        <Link to="mission">Mission</Link>
        <Link to="team">Team</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </h1>
  );
};

export default About;
