import React from "react";
import "./Pizza.css";
import { Link } from "react-router-dom";
import PizzaProduct from "./PizzaProduct";

const Pizza = () => {
  return (
    <>
      <div className="pizza">
        <div className="pizza-content">
          <span>Pizza foodies</span>
          <h3>Master Of pizzas & Tastes</h3>
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
            src="./images/pizza-banner.png"
            alt="home-img"
            className="home-img"
          />
        </div>
      </div>
      <PizzaProduct />
    </>
  );
};

export default Pizza;
