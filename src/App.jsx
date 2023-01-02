import React, { useState } from "react";
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
import Registrar from "./components/registrar";
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/login" component={Login} />
          <Route path="/registrar" component={Registrar} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
