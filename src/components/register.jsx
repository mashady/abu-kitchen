import React, { Component } from "react";
import Joi from "joi-browser";
import "../styles/login.scss";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

export default class register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      console.log(`response : ${response}`);
      await console.log(`headers : ${response.headers["x-auth-token"]}`);
      await auth.loginWithJwt(response.headers["x-auth-token"]);
      //window.location = "/"; // reload the window
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
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}
