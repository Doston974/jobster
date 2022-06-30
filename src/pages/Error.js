import React from "react";
import { Link } from "react-router-dom";
import Not from "../assets/images/Na_June_69.jpg";
import "../style/Error.css";

const Error = () => {
  return (
    <div className="err-wrapper">
      <img className="error-img" src={Not} />
      <div>
        <Link className="errorlink" to="/">
          <h2>Back Home</h2>
        </Link>
      </div>
    </div>
  );
};

export default Error;
