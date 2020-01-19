import React from "react";
import { Link } from "react-router-dom";

export const NavBtn = ({ linkTo, linkName, counter }) => {
  return (
    <Link to={linkTo} className="nav-link">
      <button className="nav-btn">
        {!!counter && <div className="nav-counter">{counter}</div>}
        {linkName}
      </button>
    </Link>
  );
};
