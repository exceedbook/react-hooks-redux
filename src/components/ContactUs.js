import React, { useState, Fragment } from "react";
import Popup from "./Popup";

const ContactUs = () => {
  const [state, setState] = useState({
    email: "",
    msg: ""
  });
  const [popupActive, renderPopup] = useState(false);
  const [formDataHasError, showError] = useState(false);

  const changeEmailHandler = value =>
    setState({
      ...state,
      email: value
    });

  const changeMessageHandler = value =>
    setState({
      ...state,
      msg: value
    });

  const flushStateHandler = () =>
    setState({
      ...state,
      email: "",
      msg: ""
    });

  const showPopup = (hasError = false) => {
    renderPopup(true);
    showError(hasError);
  };

  const closePopupHandler = () => {
    renderPopup(false);
  };

  const sendContactForm = () => {
    if (!(state.email.trim() && state.msg.trim())) {
      showPopup(true);
    } else {
      showPopup();
      flushStateHandler();
    }
  };

  return (
    <Fragment>
      {popupActive &&
        (!formDataHasError ? (
          <Popup
            popupHeader={"Server say:"}
            renderPopupContentHandler={() => (
              <img
                className="img-responsive"
                src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LtZJGF3BnjoLSeYeXE_%2F-LuOTLcQnAaCxuZPlxc2%2F-LuOVsoiOc6D7i8HNglF%2F2300883_3.jpg?alt=media&token=0c6d76e7-f6d9-4c08-ab92-5d7032935575"
                alt="no"
              />
            )}
            closePopupContentHandler={closePopupHandler}
          />
        ) : (
          <Popup
            popupHeader={"Server say:"}
            renderPopupContentHandler={() => "Server sent an error"}
            closePopupContentHandler={closePopupHandler}
          />
        ))}
      <div className="page-body">
        <div className="page-element">
          <h2>CONTACT US</h2>
          E-mail:
          <input
            value={state.email}
            className="filter-small"
            onChange={e => changeEmailHandler(e.target.value)}
            placeholder="Enter your email"
          />
          Message:
          <textarea
            value={state.msg}
            className="input-field-large"
            onChange={e => changeMessageHandler(e.target.value)}
            placeholder="Enter your message..."
          />
          <button className="common-btn" onClick={() => sendContactForm()}>
            Send
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactUs;
