import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import coffeedata from "../../data/coffeedata.json";
import "./CoffeeProduct.css";

const CoffeeProduct = () => {
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
      {coffeedata.map(({ id, title, image, price }) => {
        return (
          <div className="coffeebox-container" key={id}>
            <div className="coffeebox">
              <Link to="/" className="fas fa-heart"></Link>
              <div className="image">
                <img src={image} alt="" />
              </div>
              <div className="coffeecontent">
                <h3>{title}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <h5> (50) </h5>
                </div>
                <div className="coffeeprice">
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

export default CoffeeProduct;
