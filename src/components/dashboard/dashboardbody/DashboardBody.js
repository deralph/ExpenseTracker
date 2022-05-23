import React, { useState, useEffect, useCallback } from "react";
import { useGlobal } from "../../context/Context";
import Expenses from "../../expenses/Expenses";
import Dash from "./Dash";
import "./dashboardBody.css";
import quotes, { Category_colors } from "../../../quotesDB";
import Quote from "./Quote";
import { reduceFunction, sets } from "../../../quotesDB";
import img from "../../../Geulgram/naira-removebg-preview.png";
import { useIcons } from "../../context/Context";
import Incategories from "../../categories/Incategories";

const DashboardBody = () => {
  const [{ expenses }] = useGlobal();
  const [presentQuote, setPresentQuote] = useState(0);

  const randomNum = useCallback(() => {
    const random = Math.floor(Math.random() * (quotes.length - 1));
    console.log(random);
    setPresentQuote(random);
  }, [setPresentQuote]);

  useEffect(() => {
    const change = setInterval(() => {
      randomNum();
    }, 8000);
    return () => clearInterval(change);
  }, [randomNum]);

  const total_Expense = reduceFunction(expenses);

  const Unique_expense_Category = sets(expenses, "category");

  const percentage = Unique_expense_Category.map((uniqueCategory) => {
    const filter_Category = expenses.filter(
      (expense) => expense.category === uniqueCategory
    );

    const percent = reduceFunction(filter_Category);

    const realPercent = ((percent / total_Expense) * 100).toFixed(2);
    return { type: uniqueCategory, percenta: realPercent, percent };
  });

  const sorted_percent = percentage.sort((a, b) => {
    return b.percenta - a.percenta;
  });

  const sum = (arr, n) => {
    const joined_Array = arr.slice(0, n + 1);
    const cummulative = joined_Array.reduce((acc, real) => {
      const { percenta } = real;
      const may = Number(percenta);
      return acc + may;
    }, 0);
    return cummulative;
  };

  const Cummulative_percent_Array = [];
  const Cummulative_percent = () => {
    for (let i = 0; i < sorted_percent.length; i++) {
      const returned_cummulative_array = {
        tohundred: sum(sorted_percent, i),
        type: percentage[i].type,
      };
      Cummulative_percent_Array.push(returned_cummulative_array);
    }
  };

  Cummulative_percent();
  const Real_Gradient_color = [];
  const Gradient_color = () => {
    for (let i = 0; i < Cummulative_percent_Array.length; i++) {
      let j, f;
      i === 0 ? (j = 0) : (j = Cummulative_percent_Array[i - 1].tohundred);
      i === Cummulative_percent_Array.length - 1
        ? (f = `${Cummulative_percent_Array[i].tohundred}%`)
        : (f = `${Cummulative_percent_Array[i].tohundred}%,`);
      const returned_Gradient_color = `${
        Category_colors[Cummulative_percent_Array[i].type]
      } ${j}% ${f}`;
      Real_Gradient_color.push(returned_Gradient_color);
    }
  };
  Gradient_color();
  const joined_Real_Gradient_color = `${Real_Gradient_color.join(" ")}`;
  const Original_Gradient_color = `linear-gradient(90deg,${joined_Real_Gradient_color})`;
  const top4 = sorted_percent.slice(0, 4);
  let f;
  expenses.length < 10 ? (f = 0) : (f = expenses.length - 10);
  const data = expenses.slice(f, expenses.length);
  const icons = useIcons();
  const alimi = [];
  const all4 = top4.map((all) => {
    return icons.map((icon) => {
      if (all.type === icon.title) alimi.push({ ...icon, ...all });
    });
  });
  // all4();
  // console.log(all4);
  console.log(alimi);
  return (
    <section className="dashboard-body">
      <Quote
        quote={quotes[presentQuote].quote}
        author={quotes[presentQuote].author}
      />
      <article className="total-category">
        <div className="total-card">
          <p>
            <span>
              <img src={img} alt="naira symbol" className="naira" />
              {total_Expense}
            </span>{" "}
            {/* <br /> */}
            spent
          </p>
          <button>See List</button>
        </div>
        <div className="line-place">
          <div
            className="line-chart"
            style={{ background: Original_Gradient_color }}
          />
          <div className="line-color">
            {percentage.map((category) => {
              return (
                <Dash
                  name={category.type}
                  key={category.type}
                  color={Category_colors}
                  percentage={category.percenta}
                />
              );
            })}
          </div>
        </div>
      </article>
      <Expenses data={data} type="Latest Expenses" seeall />
      <div className="dash-top">
        <h3>Top Categories</h3>
        <div className="dash-top4">
          {alimi.map((category, index) => {
            console.log(category);
            return <Incategories {...category} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardBody;
