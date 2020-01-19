import actions from "../constants/action-types";

export function addToCart(item) {
  return {
    type: actions.ADD_ITEM_TO_CART,
    payload: item
  };
}

export function removeItemFromCart(id) {
  return {
    type: actions.REMOVE_ITEM_FROM_CART,
    payload: id
  };
}

export function flushCart() {
  return {
    type: actions.FLUSH_CART,
    payload: {}
  };
}
