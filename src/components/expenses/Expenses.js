import React from "react";
import { useGlobal } from "../context/Context";
import Expense from "./Expense";
import "./expenses.css";

const Expenses = () => {
  const [{ expenses }] = useGlobal();
  const data = expenses.slice(expenses.length - 10, expenses.length);
  return (
    <section className="expenses">
      {data.length > 1 && (
        <>
          <h3>Latest Expenses</h3>
          <div className="expense-box">
            {data.map((item) => {
              return <Expense {...item} key={item.id} />;
            })}
          </div>
          <div className="expenses-btn">
            <button className="btns">See All</button>
          </div>
        </>
      )}
    </section>
  );
};

export default Expenses;
