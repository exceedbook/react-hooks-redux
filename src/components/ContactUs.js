import React, { useState, Fragment } from "react";
import Popup from "./Popup";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsContactUs from "../actions/contact-us-actions";

const ContactUs = ({ email, msg, formDataHasError, setEmail, setMessage, flushForm, showError }) => {
  const [popupActive, renderPopup] = useState(false);

  const showPopup = (hasError = false) => {
    renderPopup(true);
    showError(hasError);
  };

  const closePopupHandler = () => {
    renderPopup(false);
  };

  const sendContactForm = () => {
    if (!(email.trim() && msg.trim())) {
      showPopup(true);
    } else {
      showPopup();
      flushForm();
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
            value={email}
            className="filter-small"
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          Message:
          <textarea
            value={msg}
            className="input-field-large"
            onChange={e => setMessage(e.target.value)}
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

const mapDispatchToProps = dispatch =>  bindActionCreators(actionsContactUs, dispatch);

const mapStateToProps = (state) => state.contactFormReducer;

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
