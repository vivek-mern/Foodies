import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row category">
            <div className="col-6 col-md-2 text-center">
              <div className="category-card">
                <Link to="/combo">
                  <div className="category-card-img">
                    <img src="./images/cat-1.png" alt="burger" />
                  </div>
                  <div className="category-card-body">
                    <h5>Combo</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-2 text-center">
              <div className="category-card">
                <Link to="/pizza">
                  <div className="category-card-img">
                    <img src="./images/cat-2.png" className="" alt="pizza" />
                  </div>
                  <div className="category-card-body">
                    <h5>Pizza</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-2 text-center">
              <div className="category-card">
                <Link to="/Burger">
                  <div className="category-card-img">
                    <img src="./images/cat-3.png" alt="burger" />
                  </div>
                  <div className="category-card-body">
                    <h5>Burger</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-2 text-center">
              <div className="category-card">
                <Link to="/chicken">
                  <div className="category-card-img">
                    <img src="./images/cat-4.png" alt="chicken" />
                  </div>
                  <div className="category-card-body">
                    <h5>Chicken</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-2 text-center">
              <div className="category-card">
                <Link to="/dinner">
                  <div className="category-card-img">
                    <img src="./images/cat-5.png" alt="dinner" />
                  </div>
                  <div className="category-card-body">
                    <h5>Dinner</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-6 col-md-2 text-center">
              <div className="category-card">
                <Link to="/coffee">
                  <div className="category-card-img">
                    <img src="./images/cat-6.png" alt="coffee" />
                  </div>
                  <div className="category-card-body">
                    <h5>Coffee</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
