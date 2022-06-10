import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useIcons } from "../../quotesDB";
import { useGlobal } from "../context/Context";
import "./expenses.css";

const SingleExpense = () => {
  const { id } = useParams();
  const { results } = useGlobal();
  const real = results.find((arr) => arr.id === id);
  const { category, date, description, month, price, productName, productNo } =
    real;

  useEffect(() => console.log(real), [real]);
  const {
    Icon: Red,
    title,
    color,
  } = useIcons().find((arr) => arr.title === category);
  return (
    <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
      <section className="single-exp">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Red className="caticon" style={{ background: `${color}` }} />
        </div>

        <p>
          <span className="single-span">Name : </span>{" "}
          <span>{productName}</span>
        </p>
        <p>
          <span className="single-span">Price : </span> <span>{price}</span>
        </p>
        <p>
          <span className="single-span">Numbar : </span>{" "}
          <span>{productNo}</span>
        </p>
        <p>
          <span className="single-span">Price : </span>{" "}
          <span>{price * productNo}</span>
        </p>
        <p>
          <span className="single-span">Description : </span>{" "}
          <span>{description}</span>
        </p>
        <p>
          <span className="single-span">Date : </span> <span>{date}</span>
        </p>
        <p>
          <span className="single-span">Month : </span> <span>{month}</span>
        </p>
      </section>
    </div>
  );
};

export default SingleExpense;
