import React from "react";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import TermsConditions from "./components/TermsConditions";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { MenuBar } from "./components/MenuBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCart from "./actions/cart-actions";
import * as actionsFilter from "./actions/filter-actions";

const App = props => {
  const { addToCart, removeItemFromCart, flushCart } = props.actionsCart;
  const { setSearch, setManufacturer } = props.actionsFilter;

  return (
    <Router>
      <MenuBar counter={props.cartItems.length} />
      <Switch>
        <Route exact path="/">
          <Shop
            items={props.items}
            filter={props.filter}
            addItemToCartHandler={addToCart}
            removeItemFromCartHandler={removeItemFromCart}
            setSearchHandler={setSearch}
            setManufacturerHandler={setManufacturer}
          />
        </Route>
        <Route path="/cart">
          <Cart
            items={props.cartItems}
            addItemToCartHandler={addToCart}
            removeItemFromCartHandler={removeItemFromCart}
          />
        </Route>
        <Route path="/terms-conditions">
          <TermsConditions />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/checkout">
          <Checkout flushCartHandler={flushCart} />
        </Route>
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    actionsCart: bindActionCreators(actionsCart, dispatch),
    actionsFilter: bindActionCreators(actionsFilter, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    ...state.cartReducer,
    ...state.filterReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
