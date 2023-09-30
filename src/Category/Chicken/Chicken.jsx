import React from "react";
import { Link } from "react-router-dom";
import "./Chicken.css";
import ChickenProduct from "./ChickenProduct";

const Chicken = () => {
  return (
    <>
      <div className="chicken">
        <div className="chicken-content">
          <span>Chicken foodies</span>
          <h3>Master Of Chickens & Tastes</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            dolor a, error, eius ea natus commodi obcaecati, dolorem repellendus
            nisi perferendis odio impedit praesentium nihil odit qui iusto
            beatae sed?
          </p>
          <div class="wrapper-btn">
            <Link to="/menu">
              <b>Order Now</b>
            </Link>
          </div>
        </div>
        <div className="image">
          <img
            src="./images/chicken-banner.png"
            alt="home-img"
            className="home-img"
          />
        </div>
      </div>
      <ChickenProduct />
    </>
  );
};

export default Chicken;
