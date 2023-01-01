import React, { Component } from "react";
import Header from "./components/header";
import MealBox from "./components/mealBox";
import { getItems, getFeaturesItems } from "./api/menuData";
import Subscribe from "./components/subscribe";
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
    return (
      <React.Fragment>
        <Header />
        <MealBox featuresItems={totalFeature} />
        <Subscribe />
      </React.Fragment>
    );
  }
}
