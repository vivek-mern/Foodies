import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="row-banner">
          <div className="content">
            <h5>Double Cheese</h5>
            <h4>BURGER</h4>
            <p>With Cococola and fries</p>
            <Link to="/burger" className="btns bg-success text-light">
              Order Now
            </Link>
          </div>
        </div>
        <div className="grid-banner">
          <div className="grid">
            <div className="content">
              <h5>Special Offer</h5>
              <h4>Upto 50% Off</h4>
              <Link to="/chicken" className="btns">
                Order Now
              </Link>
            </div>
            <img src="./images/banner-1.png" alt="" />
          </div>
        </div>
        <div className="grid-banner">
          <div className="grid">
            <div className="content change">
              <h5>Special Offer</h5>
              <h4>Upto 25% Extra</h4>
              <Link to="/dinner" className="btns bg-success text-light">
                Order Now
              </Link>
            </div>
            <img src="./images/banner-2.png" alt="" />
          </div>
        </div>
        <div className="grid-banner">
          <div className="grid">
            <div className="content">
              <h5>Limited Offer</h5>
              <h4>100% Cashback</h4>
              <Link to="/pizza" className="btns">
                Order Now
              </Link>
            </div>
            <img src="./images/banner-3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
