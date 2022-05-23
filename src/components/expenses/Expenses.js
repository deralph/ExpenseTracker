import React from "react";
import Expense from "./Expense";
import "./expenses.css";

const Expenses = ({ data, type, seeall }) => {
  return (
    <section className="expenses">
      {data.length > 1 && (
        <>
          <h3>{type}</h3>
          <div className="expense-box">
            {data.map((item) => {
              return <Expense {...item} key={item.id} />;
            })}
          </div>
          <div className="expenses-btn">
            {seeall && <button className="btns">See All</button>}
          </div>
        </>
      )}
    </section>
  );
};

export default Expenses;
