import React, { Component } from "react";
import Header from "./components/header";
import MealBox from "./components/mealBox";
import { getItems, getFeaturesItems } from "./api/menuData";
export default class home extends Component {
  state = {
    allItems: [],
    allFeaturesItems: [],
  };
  async componentDidMount() {
    const items = await getItems();
    const featuresItems = await getFeaturesItems(true);
    this.setState({ allItems: items, allFeaturesItems: featuresItems });
  }

  render() {
    const totalItems = this.state.allItems;
    const totalFeature = this.state.allFeaturesItems;
    console.log(totalFeature);
    return (
      <React.Fragment>
        <div>
          hey abu
          {totalFeature.map((total) => (
            <div>{total.title}</div>
          ))}
        </div>
        <Header />
        <MealBox />
      </React.Fragment>
    );
  }
}
