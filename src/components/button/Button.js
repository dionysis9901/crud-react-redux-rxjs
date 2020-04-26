import React from "react";
import "./button.scss";
const Button = ({ content, onClick, extraClassName }) => {
  return (
    <button className={`homePage__Btn ${extraClassName}`} onClick={onClick}>
      {content}
    </button>
  );
};
export default Button;
