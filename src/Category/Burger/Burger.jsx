import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";
import BurgerProduct from "./BurgerProduct";

const Burger = () => {
  return (
    <>
      <div className="burger">
        <div className="burger-content">
          <span>Burger foodies</span>
          <h3>Master Of Burgers & Tastes</h3>
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
            src="./images/burger-banner.png"
            alt="home-img"
            className="home-img"
          />
        </div>
      </div>
      <BurgerProduct />
    </>
  );
};

export default Burger;
