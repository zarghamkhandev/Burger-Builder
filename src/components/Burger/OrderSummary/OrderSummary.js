import React from "react";
import Auxi from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (igKey, index) => {
      return (
        <li key={igKey + "_" + index}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
          {props.ingredients[igKey]}
        </li>
      );
    }
  );
  return (
    <Auxi>
      <h3>Your Order</h3>
      <p>A delicious Burger with following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total Price: <strong>{props.price}$</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Auxi>
  );
};

export default orderSummary;
