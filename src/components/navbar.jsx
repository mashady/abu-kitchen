import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.scss";
export default class navbar extends Component {
  render() {
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
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
