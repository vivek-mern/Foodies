import React from "react";
import { Link } from "react-router-dom";
import "./ComboProduct.css";
import combodata from "../../data/combodata.json";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const ComboProduct = () => {
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
      {combodata.map(({ id, title, image, price }) => {
        return (
          <div className="combobox-container" key={id}>
            <div className="combobox">
              <Link to="/" className="fas fa-heart"></Link>
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="combocontent">
                <h3>{title}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <h5> (50) </h5>
                </div>
                <div className="comboprice">
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

export default ComboProduct;
