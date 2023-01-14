import React, { Component, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Home from "./home";
import Menu from "./menu";
import AboutUs from "./aboutUs";
import Navbar from "./components/navbar";
import Header from "./components/header";
import MealBox from "./components/mealBox";
import Footer from "./components/footer";
import NotFound from "./components/not-found";
import Login from "./components/login";
import Register from "./components/register";
import auth from "./services/authService";
import Logout from "./components/logout";
import CartProvider from "./CartContext";
import MealForm from "./components/mealForm";
class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <React.Fragment>
          <CartProvider>
            <Navbar user={user} />

            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={Register} />
              <Route path="/meals/:id" component={MealForm} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/home" />
              <Redirect to="/not-found" />
            </Switch>
          </CartProvider>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
