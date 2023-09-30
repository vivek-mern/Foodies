import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import chickendata from "../../data/chickendata.json";
import "./ChickenProduct.css";

const ChickenProduct = () => {
  const dispatch = useDispatch();

  const addCart = (data) => {
    dispatch({
      type: "add",
      payload: data,
    });
    dispatch({
      type: "calculate",
    });
    toast.success("Add to Cart");
  };
  return (
    <>
      {chickendata.map(({ id, title, image, price }) => {
        return (
          <div className="chickenbox-container" key={id}>
            <div className="chickenbox">
              <Link to="/" className="fas fa-heart"></Link>
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="chickencontent">
                <h3>{title}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <h5> (50) </h5>
                </div>
                <div className="chickenprice">
                  Rs {price} <h5>RS 1150.00</h5>
                </div>
                <Link
                  to=""
                  className="btns"
                  onClick={() =>
                    addCart({ id, title, image, price, quantity: 1 })
                  }
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChickenProduct;
