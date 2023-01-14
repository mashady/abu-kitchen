import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMeal, saveMeal } from "../services/mealService";
import { getGenres } from "../services/genreService";

class MealForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      description: "",
      image: "",
      price: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    description: Joi.string().required().label("Description"),
    image: Joi.string().required().label("Image"),
    price: Joi.string().required().label("Price"),
  };

  populateGenres = async () => {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  };

  populateMeals = async () => {
    try {
      const mealId = this.props.match.params.id;
      if (mealId === "new") return;

      const { data: meal } = await getMeal(mealId);
      this.setState({ data: this.mapToViewModel(meal) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.props.history.replace("/not-found");
    }
  };

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMeals();
  }

  mapToViewModel = (meal) => {
    return {
      _id: meal._id,
      title: meal.title,
      genreId: meal.genre._id,
      description: meal.description,
      image: meal.iamge,
      price: meal.price,
    };
  };

  doSubmit = async () => {
    await saveMeal(this.state.data);

    this.props.history.push("/menu");
  };

  render() {
    return (
      <div>
        <h1>Meal Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          <label>Description</label>
          {this.renderInput("description", "Description", "description")}
          <label>Image</label>
          {this.renderInput("image", "Image")}
          <label>Price</label>
          {this.renderInput("price", "Price")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MealForm;
