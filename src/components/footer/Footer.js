import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer__signature">
      {" "}
      <p className="footer__signature__text">
        Made by Dionysis Koufis with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        and{" "}
        <span role="img" aria-label="react">
          ⚛️
        </span>
      </p>
    </div>
  );
};
export default Footer;
