import React, { Component } from "react";
import "../styles/subscribe.scss";
export default class subscribe extends Component {
  render() {
    return (
      <section className="subscribe">
        <div className="container">
          <span>Get in touch</span>
          <h4>Enter your e-mail address and get our new offers</h4>
          <div className="email-box">
            <input
              className="form-control rounded"
              type="text"
              placeholder="Your e-mail address"
            />
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </section>
    );
  }
}
