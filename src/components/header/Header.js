import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__heading">
        <span role="img" aria-label="glasses">
          🥽
        </span>{" "}
        C R U D{" "}
        <span role="img" aria-label="glasses">
          🥽
        </span>
      </h1>
    </div>
  );
};

export default Header;
