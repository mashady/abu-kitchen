import React, { Component } from "react";
import "../styles/navbar.scss";
export default class navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <a className="brand-name" href="">
              abuKitchen
            </a>
            <div className="nav-items">
              <a className="a-link" href="">
                Home
              </a>
              <a className="a-link" href="">
                Menu
              </a>
              <a className="a-link" href="">
                About Us
              </a>
            </div>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </nav>
    );
  }
}
