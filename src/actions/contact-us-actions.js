import actions from "../constants/action-types";

export function setEmail(str) {
  return {
    type: actions.SET_EMAIL,
    payload: str
  };
}

export function setMessage(msg) {
  return {
    type: actions.SET_MESSAGE,
    payload: msg
  };
}

export function flushForm() {
  return {
    type: actions.FLUSH_CONTACT_FORM,
    payload: {}
  };
}

export function showError(hasError) {
  return {
    type: actions.SET_ERROR_CONTACT_FORM,
    payload: hasError
  };
}
