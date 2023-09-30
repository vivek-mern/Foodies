import React from "react";
import { Link } from "react-router-dom";
import "./Combo.css";
import ComboProduct from "./ComboProduct";

const Combo = () => {
  return (
    <>
      <div className="combo">
        <div className="combo-content">
          <span>Combo foodies</span>
          <h3>Master Of Combos & Tastes</h3>
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
            src="./images/combo-banner.png"
            alt="home-img"
            className="home-img"
          />
        </div>
      </div>
      <ComboProduct />
    </>
  );
};

export default Combo;
