import { data } from "../db/db";

const initialState = {
  items: data,
  cartItems: [],
};
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        items: state.items.filter(e => {
          if (e._id === action.payload._id) {
            e.selected = !e.selected;
          }
          return true;
        }),
        cartItems: state.cartItems.concat([action.payload])
      };

    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        items: state.items.filter(e => {
          if (e._id === action.payload) {
            e.selected = !e.selected;
          }
          return true;
        }),
        cartItems: state.cartItems.filter(e =>
          e._id === action.payload ? false : true
        )
      };

    case "FLUSH_CART":
      return {
        ...state,
        items: state.items.filter(e => {
          e.selected = false;
          return true;
        }),
        cartItems: []
      };

    default:
      return state;
  }
}
export default cartReducer;
