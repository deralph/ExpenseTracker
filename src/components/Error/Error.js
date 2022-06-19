import React from "react";
import { Link } from "react-router-dom";
import img from "../../Geulgram/error404-removebg-preview.png";
import "./Error.css";
const Error = () => {
  return (
    <section className="error">
      <img src={img} alt="" />
      <div className="error-cont">
        <h3>404 - Page Not Found</h3>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily not available
        </p>
        <Link to="/">Go to homePage</Link>
      </div>
    </section>
  );
};

export default Error;
