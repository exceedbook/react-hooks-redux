import actions from "../constants/action-types";

export function setSearch(value) {
  return {
    type: actions.SET_SEARCH,
    payload: value
  };
}

export function setManufacturer(index) {
  return {
    type: actions.SET_MANUFACTURER,
    payload: index
  };
}