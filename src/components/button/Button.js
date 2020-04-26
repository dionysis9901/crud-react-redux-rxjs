import React from "react";
import "./button.scss";
const Button = ({ content, onClick }) => {
  return (
    <button className="homePage__Btn" onClick={onClick}>
      {content}
    </button>
  );
};
export default Button;
