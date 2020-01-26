import React from "react";
import { Link } from "react-router-dom";

export const CommonLinkBtn = ({ linkTo, linkName }) => {
  return (
    <Link to={linkTo}>
      <button className="common-link-btn">{linkName}</button>
    </Link>
  );
};
