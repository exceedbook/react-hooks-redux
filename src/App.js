import React, { useState } from "react";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import TermsConditions from "./components/TermsConditions";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { MenuBar } from "./components/MenuBar";
import { data, manufacturers } from "./db/db";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [state, setState] = useState({
    items: data,
    cartItems: [],
    filter: {
      search: "",
      manufacturers: manufacturers,
      selectedManufacturers: []
    }
  });

  const addItemToCartHandler = newItem => {
    setState({
      ...state,
      items: state.items.filter(e => {
        if (e._id === newItem._id) {
          e.selected = !e.selected;
        }
        return true;
      }),
      cartItems: state.cartItems.concat([newItem])
    });
  };

  const removeItemFromCartHandler = id => {
    setState({
      ...state,
      items: state.items.filter(e => {
        if (e._id === id) {
          e.selected = !e.selected;
        }
        return true;
      }),
      cartItems: state.cartItems.filter(e => (e._id === id ? false : true))
    });
  };

  const flushCartHandler = () => {
    setState({
      ...state,
      items: state.items.filter(e => {
        e.selected = false;
        return true;
      }),
      cartItems: []
    });
  };

  const setSearchHandler = newValue => {
    setState({
      ...state,
      filter: {
        ...state.filter,
        search: newValue
      }
    });
  };

  const setManufacturerHandler = index => {
    setState({
      ...state,
      filter: {
        ...state.filter,
        manufacturers: manufacturers.map((e, i) => {
          if (i === index) {
            e.selected = !e.selected;
          }
          return e;
        }),
        selectedManufacturers: manufacturers.filter(e => e.selected === true)
      }
    });
  };

  return (
    <Router>
      <MenuBar
        currentPage={state.currentPage}
        counter={state.cartItems.length}
      />
      <Switch>
        <Route exact path="/">
          <Shop
            items={state.items}
            filter={state.filter}
            addItemToCartHandler={addItemToCartHandler}
            removeItemFromCartHandler={removeItemFromCartHandler}
            setSearchHandler={setSearchHandler}
            setManufacturerHandler={setManufacturerHandler}
          />
        </Route>
        <Route path="/cart">
          <Cart
            items={state.cartItems}
            addItemToCartHandler={addItemToCartHandler}
            removeItemFromCartHandler={removeItemFromCartHandler}
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
          <Checkout flushCartHandler={flushCartHandler} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
