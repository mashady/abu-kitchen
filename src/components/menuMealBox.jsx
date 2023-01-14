import React, { Component, useContext } from "react";
import { CartContext } from "../CartContext";
import "../styles/menuMealBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function menuMealBox(props) {
  const cart = useContext(CartContext);
  const { meal } = props;
  //console.log(meal);
  const productQuantity = cart.getProductQuantity(meal.id);

  console.log(`q id : ${productQuantity}`);
  const cartItems = () => {
    const productsCount = cart.items.reduce(
      (sum, product) => sum + product.quantity,
      0
    );

    console.log(productsCount);
    console.log(cart);
  };
  return (
    <div className="col-md-4" key={meal._id}>
      <div className="meal-card">
        <img className="img-fluid rounded" src={meal.image} alt="meal image" />
        <div className=" card-bottom">
          <h4 className="text-truncate">{meal.title}</h4>
          <p onClick={cartItems} className="text-truncate">
            {meal.description}
          </p>
          <div className="card-footer">
            <span>{meal.price}</span>
            {productQuantity > 0 ? (
              <>
                <button
                  sm="6"
                  onClick={() => cart.addOneToCart(meal.id)}
                  className="mx-2"
                >
                  +
                </button>
                <button
                  sm="6"
                  onClick={() => cart.removeOneFromCart(meal.id)}
                  className="mx-2"
                >
                  -
                </button>
              </>
            ) : (
              <span
                onClick={() => cart.addOneToCart(meal.id)}
                className="add rounded-circle"
              >
                <FontAwesomeIcon
                  style={{
                    color: "#FFF",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                  icon={faAdd}
                />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
