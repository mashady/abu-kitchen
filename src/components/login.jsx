import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import "../styles/login.scss";
import Form from "../components/common/form";
import auth from "../services/authService";

export default class login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: { err: "" },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //console.log(response.status);
    try {
      const { username, password } = this.state.data;
      await auth.login(username, password);
      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = error.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-page ">
        <div className="container  form-signin w-100 m-auto">
          <form onSubmit={this.handleSubmit} className="text-center">
            <h1>Welcome to abuKitchen 👋</h1>
            <div className="form-floating">
              {this.renderInput("username", "Username")}
            </div>
            <div className="form-floating">
              {this.renderInput("password", "Password")}
            </div>
            {this.renderButton("Login")}

            <a
              href="/register"
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
