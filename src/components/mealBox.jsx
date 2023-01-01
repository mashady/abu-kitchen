import React, { Component } from "react";
import "../styles/mealBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
export default class mealBox extends Component {
  componentDidMount() {}
  render() {
    const { featuresItems } = this.props;
    return (
      <section className="meals-box">
        <div className="container">
          <h3
            style={{
              marginLeft: "2rem",
              marginBottom: "2rem",
            }}
          >
            Feature Meals
          </h3>
          <div className="row">
            {featuresItems.map((item) => (
              <div className="col-md-4" key={item._id}>
                <div className="meal-card">
                  <img
                    className="img-fluid rounded"
                    src={item.image}
                    alt="meal image"
                  />
                  <div className=" card-bottom">
                    <h4 className="text-truncate">{item.title}</h4>
                    <p className="text-truncate">{item.description}</p>
                    <div className="card-footer">
                      <span>{item.price}</span>
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
            ))}
          </div>
        </div>
      </section>
    );
  }
}
