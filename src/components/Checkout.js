import React, { useEffect } from "react";
import { CommonLinkBtn } from "./CommonLinkBtn";

const Checkout = ({ flushCartHandler }) => {
  useEffect(() => {
    flushCartHandler();
  }, []);

  return (
    <div className="page-body">
      <div className="page-element">
        <div className="checkout-page">
          <h2>Successful!</h2>
          <CommonLinkBtn linkTo={"/"} linkName={"Back to shop"} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
