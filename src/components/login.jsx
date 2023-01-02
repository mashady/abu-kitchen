import React, { Component } from "react";
import "../styles/login.scss";
export default class login extends Component {
  render() {
    return (
      <div className="login-page ">
        <div className="container  form-signin w-100 m-auto">
          <form className="text-center">
            <h1>Welcome to abuKitchen 👋</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control mb-2 rounded"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control mb-2 rounded"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <a
              href="/registrar"
              style={{
                display: "flex",
                marginLeft: "0.1rem",
                marginTop: "0.1rem",
              }}
            >
              Create a new account
            </a>
          </form>
        </div>
      </div>
    );
  }
}
