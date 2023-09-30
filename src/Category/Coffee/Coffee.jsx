import React from "react";
import { Link } from "react-router-dom";
import "./Coffee.css";
import CoffeeProduct from "./CoffeeProduct";
const Coffee = () => {
  return (
    <>
      <div className="coffee">
        <div className="coffee-content">
          <span>Coffee foodies</span>
          <h3>Master Of Coffees & Tastes</h3>
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
            src="./images/coffee-banner.png"
            alt="home-img"
            className="home-img"
          />
        </div>
      </div>
      <CoffeeProduct />
    </>
  );
};

export default Coffee;
