import React, { Component } from "react";
import "../styles/mealBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
export default class mealBox extends Component {
  componentDidMount() {}
  render() {
    return (
      <section className="meals-box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="meal-card">
                <img
                  className="img-fluid rounded"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2021/10/Tesco-burgers-and-slaw-87d15f4.jpg"
                  alt="meal image"
                />
                <div className=" card-bottom">
                  <h4>meal title</h4>
                  <p className="text-truncate">the meal descriptionthe</p>
                  <div className="card-footer">
                    <span>30 $</span>
                    <span className="add rounded-circle">
                      <FontAwesomeIcon
                        style={{
                          color: "#FFF",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                        }}
                        icon={faAdd}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
