import React, { Component } from "react";
import "../styles/mealBox.scss";
export default class mealBox extends Component {
  componentDidMount() {
    const options = {
      method: "GET",
    };

    fetch("www.themealdb.com/api/json/v1/1/categories.php", options);

    console.log("we mounted succefully");
  }
  render() {
    return (
      <section className="meals-box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="meal-card">
                <img className="" src="" alt="meal image" />
                <h4>meal title</h4>
                <p>the meal description </p>
                <span>price $</span>
                <span>add icon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
