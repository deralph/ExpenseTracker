import React from "react";
import { Link } from "react-router-dom";
import Expense from "./Expense";
import "./expenses.css";
import { RiEqualizerLine } from "react-icons/ri";
import { useGlobal } from "../../components/context/Context";

const Expenses = ({ data, type, seeall }) => {
  const { sidebar, setSidebar } = useGlobal();
  return (
    <section className="expenses">
      {data.length > 1 && (
        <>
          <RiEqualizerLine
            className="dash-top1"
            onClick={() => setSidebar(!sidebar)}
            style={{ color: sidebar ? "#fff" : "#000" }}
          />
          <h3>{type}</h3>
          <div className="expense-box">
            {data.map((item) => {
              return <Expense {...item} key={item.id} />;
            })}
          </div>
          <div className="expenses-btn">
            {seeall && (
              <Link to="allExpense">
                <button className="btns">See All</button>
              </Link>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default Expenses;
