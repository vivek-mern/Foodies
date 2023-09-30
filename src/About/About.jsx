import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="image">
          <img src="./images/about-img.png" alt="about-img" />
        </div>

        <div className="content">
          <span>Why Choose Us?</span>
          <h3>What's Make Our Food Delicious!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            blanditiis, doloribus cum iste corporis deleniti alias animi vero
            laudantium harum officiis vel dolorem consectetur deserunt itaque
            tempora culpa esse labore?
          </p>
          <div className="wrapper-btn">
            <Link to="/aboutread">
              <b>Read More</b>
            </Link>
          </div>
          <div className="icons-container">
            <div className="icons">
              <img src="./images/serv-1.png" alt="delivery" />
              <h3>Fast delivery</h3>
            </div>
            <div className="icons">
              <img src="./images/serv-2.png" alt="fresh" />
              <h3>Fresh food</h3>
            </div>
            <div className="icons">
              <img src="./images/serv-3.png" alt="quality" />
              <h3>Best quality</h3>
            </div>
            <div className="icons">
              <img src="./images/serv-4.png" alt="support" />
              <h3>24/7 support</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
