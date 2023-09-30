import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Burger from "./Category/Burger/Burger";
import Chicken from "./Category/Chicken/Chicken";
import Combo from "./Category/Combo/Combo";
import Pizza from "./Category/Pizza/Pizza";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Dinner from "./Category/Dinner/Dinner";
import Order from "./Order/Order";
import Coffee from "./Category/Coffee/Coffee";
import AboutRead from "./About/AboutRead";
import Cart from "./Cart/Cart";
import { Toaster } from "react-hot-toast";
import UserForm from "./Header/UserForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/combo" element={<Combo />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/chicken" element={<Chicken />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/aboutread" element={<AboutRead />} />
          <Route path="/userform" element={<UserForm />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
