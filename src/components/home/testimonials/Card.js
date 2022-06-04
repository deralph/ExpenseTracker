import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ id, img, testimony, name }) => {
  return (
    <div className="card">
      <img src={img} alt="tetimonials " />
      {/* <FaQuoteLeft className="icon-left" /> */}
      <p>
        <FaQuoteLeft className="icon-left" />
        {testimony}
        <FaQuoteRight className="icon-right" />
      </p>
      <p className="p">{name}</p>
    </div>
  );
};

export default Card;
