import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    price: 0,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const updatedIngredients = { ...this.state.ingredients };
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        updatedIngredients[param[0]] = +param[1];
      }
    }

    this.setState({ ingredients: updatedIngredients, totalPrice: price });
  }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    console.log("checkout render", this.state.ingredients);
    return (
      <div>
        <CheckoutSummary
          CheckoutContinued={this.checkoutContinuedHandler}
          CheckoutCancelled={this.checkoutCancelledHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
