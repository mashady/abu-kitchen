import React, { Component, useState, useContext } from "react";
import { CartContext } from "../CartContext";

import { Link, NavLink } from "react-router-dom";
import logout from "../components/logout";

import "../styles/navbar.scss";
function navbar(props) {
  const cart = useContext(CartContext);
  const user = props.user;
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const cartItems = () => {
    const productsCount = cart.items.reduce(
      (sum, product) => sum + product.quantity,
      0
    );

    console.log(productsCount);
    console.log(cart);
  };
  return (
    <nav>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <Link className="brand-name" to="/">
            abuKitchen
          </Link>
          <div className="nav-items">
            <Link className="a-link" to="/home">
              Home
            </Link>
            <Link className="a-link" to="/menu">
              Menu
            </Link>
            <Link className="a-link" to="about-us">
              About Us
            </Link>
          </div>
          {!user && (
            <>
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            </>
          )}
          {user && (
            <>
              <div>
                <Link to="/profile">profile </Link>
                <Link to="/logout">logout</Link>
                <button onClick={cartItems} className="">
                  cart ({productsCount})
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default navbar;
