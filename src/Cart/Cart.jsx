import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderNotFound from "../OrderNotFound/OrderNotFound";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch({
      type: "remove",
      payload: { id },
    });
    dispatch({
      type: "calculate",
    });
    toast.success("Remove to Cart");
  };
  const incrementquantity = (id) => {
    dispatch({
      type: "add",
      payload: { id },
    });
    dispatch({
      type: "calculate",
    });
  };
  const decrementquantity = (id) => {
    dispatch({
      type: "decrement",
      payload: { id },
    });
    dispatch({
      type: "calculate",
    });
  };

  const { cartItem } = useSelector((state) => state.Cart);

  return (
    <>
      {cartItem.map(({ id, title, image, price, quantity }) => {
        return (
          <div className="cart" key={id}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="shopping-cart">
                    <div className="cart-item">
                      <div className="row">
                        <div className="col-md-6 my-auto">
                          <Link to="">
                            <label className="product-name text-light">
                              <img
                                src={image}
                                style={{ width: "60px", height: "50px" }}
                                alt=""
                              />
                              {title}
                            </label>
                          </Link>
                        </div>
                        <div className="col-md-2 my-auto text-light">
                          <label className="price">Rs. {price}</label>
                        </div>
                        <div className="col-md-2 col-7 my-auto">
                          <div className="quantity">
                            <div className="input-group">
                              <span
                                className="btn1"
                                onClick={() => decrementquantity(id)}
                              >
                                <i className="fa fa-minus"></i>
                              </span>
                              <input
                                type="text"
                                value={quantity}
                                className="input-quantity"
                                readOnly
                              />
                              <span
                                className="btn1"
                                onClick={() => incrementquantity(id)}
                              >
                                <i className="fa fa-plus"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 col-5 my-auto">
                          <div className="remove">
                            <Link
                              className="btns"
                              onClick={() => removeCart(id)}
                            >
                              <i className="fa fa-trash"></i> Remove
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <OrderNotFound />
    </>
  );
};

export default Cart;
