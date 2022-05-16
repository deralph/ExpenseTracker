import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ id, img, testimony, name }) => {
  return (
    <div className="card">
      <img src={img} alt="tetimonial picture" />
      <FaQuoteLeft className="icon-left" />
      <p>{testimony}</p>
      <FaQuoteRight className="icon-right" />
      <p className="p">{name}</p>
    </div>
  );
};

export default Card;
