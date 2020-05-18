import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div style={{ width: "100%", margin: "auto", textAlign: "center" }}>
        <h1>We hope that it tastes well!</h1>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={props.CheckoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.CheckoutContinued}>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
