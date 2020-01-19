import React from "react";
import { ItemCart } from "./ItemCart";
import { CommonLinkBtn } from "./CommonLinkBtn";

const Cart = ({ items, addItemToCartHandler, removeItemFromCartHandler }) => {
  const renderItems = () => {
    return !!items.length
      ? items.map(e => {
          return (
            <ItemCart
              item={e}
              addItemToCartHandler={addItemToCartHandler}
              removeItemFromCartHandler={removeItemFromCartHandler}
            />
          );
        })
      : "Your cart is empty...";
  };

  const calculatePrice = () => {
    let price = 0;
    items.forEach(element => {
      price += element.price;
    });
    return price.toFixed(2);
  };

  return (
    <div className="page-body cart-page">
      <div className="cart-items-table page-element">{renderItems()}</div>
      <div className="cart-total-price-section page-element">
        <div>
          <h3>Total price:</h3>
          <div className="cart-total-price">${calculatePrice()}</div>
        </div>
        {!items.length ? (
          <CommonLinkBtn linkTo={"/"} linkName={"Back to shop"} />
        ) : (
          <CommonLinkBtn linkTo={"/checkout"} linkName={"Checkout"} />
        )}
      </div>
    </div>
  );
};

export default Cart;
