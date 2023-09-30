import React from "react";
import { Link } from "react-router-dom";
import "./Dinner.css";
import DinnerProduct from "./DinnerProduct";

const Dinner = () => {
  return (
    <>
      <div className="dinner">
        <div className="dinner-content">
          <span>Dinner foodies</span>
          <h3>Master Of Dinners & Tastes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            dolor a, error, eius ea natus commodi obcaecati, dolorem repellendus
            nisi perferendis odio impedit praesentium nihil odit qui iusto
            beatae sed?
          </p>
          <div className="wrapper-btn">
            <Link to="/menu">
              <b>Order Now</b>
            </Link>
          </div>
        </div>
        <div className="image">
          <img
            src="./images/dinner-banner.png"
            alt="home-img"
            className="home-img"
          />
        </div>
      </div>
      <DinnerProduct />
    </>
  );
};

export default Dinner;
