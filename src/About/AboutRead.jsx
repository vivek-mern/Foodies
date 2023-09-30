import React from "react";
import { Link } from "react-router-dom";
import "./AboutRead.css";
const AboutRead = () => {
  return (
    <>
      <div className="about-read">
        <h1>Foodies</h1>
        <p>About Us</p>
      </div>
      <div className="container text-center text-light mt-4">
        <p>
          Foodies is a seasonal cafe and marketplace featuring fresh baked foods
          in India, CA run by Chef/Baker Roxana Jullapat and Chef Daniel
          Mattern. Longtime champions of produce-driven cooking, Jullapat and
          Mattern built their careers over fifteen years in renowned kitchens of
          India (including AOC, Lucques, Campanile, and Cooks County)
          <br /> before opening Foodies. At Foodies, they continue their
          dedication to hand made food with artisan Burger and Pizza's made
          daily with locally-sourced, heirloom grains, as well as a produce
          forward day-time menu.
        </p>
        <Link to="/" className="btns ">
          BACK TO HOME
        </Link>
      </div>
    </>
  );
};

export default AboutRead;
