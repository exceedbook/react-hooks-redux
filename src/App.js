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

const App = ({ cartItems, items, filter, addToCart, removeItemFromCart, flushCart, setSearch, setManufacturer }) => {

  return (
    <Router>
      <MenuBar counter={cartItems.length} />
      <Switch>
        <Route exact path="/">
          <Shop
            items={items}
            filter={filter}
            addItemToCartHandler={addToCart}
            removeItemFromCartHandler={removeItemFromCart}
            setSearchHandler={setSearch}
            setManufacturerHandler={setManufacturer}
          />
        </Route>
        <Route path="/cart">
          <Cart
            items={cartItems}
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
    ...bindActionCreators(actionsCart, dispatch),
    ...bindActionCreators(actionsFilter, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    ...state.cartReducer,
    ...state.filterReducer
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
