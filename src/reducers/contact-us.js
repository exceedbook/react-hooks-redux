const initialState = {
  email: "",
  msg: "",
  formDataHasError: false
};
function contactFormReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload
      };

    case "SET_MESSAGE":
      return {
        ...state,
        msg: action.payload
      };

    case "FLUSH_CONTACT_FORM":
      return {
        ...state,
        email: "",
        msg: ""
      };

    case "SET_ERROR_CONTACT_FORM":
      return {
        ...state,
        formDataHasError: action.payload
      };

    default:
      return state;
  }
}
export default contactFormReducer;
