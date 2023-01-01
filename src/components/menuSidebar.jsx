import React, { Component } from "react";
import "../styles/menuSidebar.scss";
const Delivery = "../assets/images/deliverey.png";
export default class menuSidebar extends Component {
  render() {
    return (
      <div className="sidebar text-center">
        <img src="" className="img-fluid mb-4" />
        <span className="user-span">Guset</span>
        <ul className="list-group mt-4">
          <li className="list-group-item rounded active">Home</li>
          <li className="list-group-item rounded">Menu</li>
          <li className="list-group-item rounded">About Us</li>
        </ul>
      </div>
    );
  }
}
