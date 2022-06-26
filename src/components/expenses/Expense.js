import React from "react";
import img from "../../Geulgram/naira-removebg-preview.png";
import { useIcons } from "../../quotesDB";
import { Link } from "react-router-dom";
import "./expenses.css";

const Expense = ({ id, productName, price, category, productNo, date }) => {
  return (
    <div className="expense">
      <Link to={`/expense/${id}`}>
        <div>
          {useIcons().map((icon) => {
            const Red = icon.Icon;
            if (icon.title === category) {
              return (
                <Red
                  style={{ background: `${icon.color}` }}
                  className="exp-icon"
                  key={icon.title}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="exp">
          <p className="exp-name">{productName}</p>
          <p className="exp-date">{date}</p>
        </div>
        <div className="exp">
          <p className="exp-price">
            <img src={img} alt="naira" className="naira" />
            {price * productNo}
          </p>
          <p className="exp-date">{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Expense;
