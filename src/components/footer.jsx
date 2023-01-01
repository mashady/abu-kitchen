import React, { Component } from "react";
import "../styles/footer.scss";
export default class footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="footer-wraper d-flex justify-content-between align-items-center">
            <span> &copy; all right reserved to abuKitchen 2023</span>
            <div>
              <a href="">terms</a>
              <a href="">privacy</a>
              <a href="">cookies</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
