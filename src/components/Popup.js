import React, { useRef, useEffect } from "react";

const Popup = ({
  popupHeader,
  renderPopupContentHandler,
  closePopupContentHandler
}) => {
  const myRef = useRef();
  const onClickOutside = e => {
    if (myRef && !myRef.current.contains(e.target)) {
      closePopupContentHandler();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="popup-element page-element" ref={myRef}>
      <div className="popup-header">
        <h2> {popupHeader.toUpperCase()} </h2>
      </div>
      <div className="popup-body">
        <div>{renderPopupContentHandler()}</div>
      </div>
      <div className="popup-footer">
        <button
          className="common-btn"
          onClick={() => closePopupContentHandler()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
