import React, { Component } from "react";
import { Link } from "react-router-dom";
import { headerCover } from "../assets/images";
import "../styles/header.scss";
export default class header extends Component {
  render() {
    return (
      <header>
        <div className="row container-fluid">
          <div className="col-md-6">
            <h2>Enjoy food all over the world</h2>
            <p>
              These healthy recipes shake up your comfort food favorites by
              adding more veggies and swapping out cooking methods
            </p>

            <Link to="/menu">
              <button className="btn btn-primary">Order now</button>
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <img
              className="img-fluid"
              style={{ width: "85%" }}
              src={headerCover}
            ></img>
          </div>
        </div>
      </header>
    );
  }
}
