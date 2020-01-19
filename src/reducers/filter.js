import { manufacturers } from "../db/db";

const initialState = {
  filter: {
    search: "",
    manufacturers: manufacturers,
    selectedManufacturers: []
  }
};
function filterReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload
        }
      };

    case "SET_MANUFACTURER":
      return {
        ...state,
        filter: {
          ...state.filter,
          manufacturers: manufacturers.map((e, i) => {
            if (i === action.payload) {
              e.selected = !e.selected;
            }
            return e;
          }),
          selectedManufacturers: manufacturers.filter(e => e.selected === true)
        }
      };

    default:
      return state;
  }
}
export default filterReducer;
