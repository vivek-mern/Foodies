import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="content">
          <span>Welcome foodies</span>
          <h3>Different Spieces For The Different Tastes</h3>
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
            src="./images/new-home-img.png"
            alt="home-img"
            className="home-img"
          />
        </div>
      </div>
      <Category />
      <About />
      <Menu />
      <Banner />
      <Order />
      <a href="#" className="top">
        &#8613;
      </a>
    </>
  );
};

export default Home;
