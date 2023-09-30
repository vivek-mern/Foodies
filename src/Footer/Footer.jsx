import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer mt-4">
        <div className="newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" name="" placeholder="Enter your email" id="" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>

        <div className="footer-container">
          <div className="box">
            <h3>Our Menu</h3>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> Pizza
            </Link>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> Burger
            </Link>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> Chicken
            </Link>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> Pasta
            </Link>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> And more...
            </Link>
          </div>

          <div className="box">
            <h3>Quick Links</h3>
            <Link to="/">
              <i className="fas fa-arrow-right"></i> Home
            </Link>
            <Link to="/about">
              <i className="fas fa-arrow-right"></i> About
            </Link>
            <Link to="/menu">
              <i className="fas fa-arrow-right"></i> Menu
            </Link>
            <Link to="/order">
              <i className="fas fa-arrow-right"></i> Order
            </Link>
          </div>

          <div className="box">
            <h3>Extra Links</h3>
            <Link to="#">
              <i className="fas fa-arrow-right"></i> My order
            </Link>
            <Link to="#">
              <i className="fas fa-arrow-right"></i> My account
            </Link>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> My favorite
            </Link>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> Terms Of Use
            </Link>
            <Link href="#">
              <i className="fas fa-arrow-right"></i> Privasy Policy
            </Link>
          </div>

          <div className="box">
            <h3>Opening Hours</h3>
            <p>Monday : 7:00am to 10:00pm</p>
            <p>Tuesday : 7:00am to 10:00pm</p>
            <p>Wednesday : 7:00am to 10:00pm</p>
            <p>Friday : 7:00am to 10:00pm</p>
            <p>Saturday and Sunday Closed</p>
          </div>
        </div>

        <div className="bottom">
          <div className="share">
            <Link
              to="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569900%7Cb%7Cfacebook%20log%20in%7C&placement=&creative=589460569900&keyword=facebook%20log%20in&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1409266755%26loc_physical_ms%3D9061674%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiAgOefBhDgARIsAMhqXA7Kx02KM1WUYLXinx_s_YeT44NZfIlSan0puSFv9vfY3b-bDfBbyVgaAqHZEALw_wcB"
              className="fab fa-facebook-f"
            ></Link>
            <Link
              to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              className="fab fa-twitter"
            ></Link>
            <Link
              to="https://www.instagram.com/accounts/login/"
              className="fab fa-instagram"
            ></Link>
            <Link
              to="https://www.linkedin.com/login"
              className="fab fa-linkedin"
            ></Link>
            <Link
              to="https://in.pinterest.com/login/"
              className="fab fa-pinterest"
            ></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
