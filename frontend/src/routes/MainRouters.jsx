import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import CartPages from "../pages/CartPages";
import Checkout from "../pages/Checkout";
import Payment from "../pages/Payment";
import StackList from "../pages/StackList";
import ProductDetails from "../pages/ProductDetails";
function MainRouters() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cartpage" element={<CartPages />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/stacklist" element={<StackList/>} />
      <Route path="/productdetails" element={<ProductDetails/>} />
    </Routes>
  );
}

export default MainRouters;
