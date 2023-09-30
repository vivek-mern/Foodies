import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { cartItem } = useSelector((state) => state.Cart);
  return (
    <>
      <div className="header">
        <Link to="/" className="logo fas fa-pizza-slice">
          <span>Foodies</span>
        </Link>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order">Order</Link>
        </div>
        <div className="icons">
          <div className="fa fa-search"></div>
          <Link to="/cart">
            <div className="fa fa-shopping-cart position-relative">
              <span className="position-absolute top-0 translate-middle  rounded-circle cart-number">
                {cartItem.length}
              </span>
            </div>
          </Link>
          <Link to="/userform">
            <div className="fa fa-user"></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
