import React from "react";
import { useGlobal } from "../../context/Context";
import Dash from "./Dash";
import "./dashboardBody.css";
const DashboardBody = () => {
  const [{ expenses }, dispatch] = useGlobal();
  console.log(expenses);
  const total = expenses.reduce((exp, expense) => {
    const { productNo, price } = expense;
    const proNo = parseInt(productNo);
    const proPrice = parseInt(price);
    const expenseTotal = proNo * proPrice;

    // exp.total += expenseTotal;
    return exp + expenseTotal;
  }, 0);
  const met1 = expenses.map((expense) => expense.category);
  const met = [...new Set(met1)];
  const colors = {
    cloth: "#993377",
    grocery: "skyblue",
    drinks: "rgba(165, 42, 42, 0.514)",
    electric: "blueviolet",
    home: "yellowgreen",
    transport: "grey",
    micellenous: "yellow",
    foods: "peachpuff",
    others: "rgb(255, 0, 157)",
    accesories: "burlywood",
  };
  const percentage = met.map((man) => {
    const percent = expenses.filter((expense) => expense.category === man);
    console.log(percent);
    const per = percent.reduce((_per, pre) => {
      const { productNo, price } = pre;
      const proNo = parseInt(productNo);
      const proPrice = parseInt(price);
      const preTotal = proNo * proPrice;
      return _per + preTotal;
    }, 0);
    console.log(per);
    const realPercent = ((per / total) * 100).toFixed(2);
    console.log(realPercent);
    return { type: man, percenta: realPercent };
  });

  const sum = (arr, n) => {
    const filtered = arr.slice(0, n + 1);
    // console.log(filtered);
    const filterer = filtered.reduce((acc, real) => {
      const { percenta, type } = real;
      const may = Number(percenta);
      return acc + may;
    }, 0);
    // console.log(filterer);
    return filterer;
  };
  console.log(sum(percentage, 4));
  const newArr = [];
  const gradient = () => {
    for (let i = 0; i < percentage.length; i++) {
      console.log(i);
      console.log(percentage[i].type);
      const felt = { tohundred: sum(percentage, i), type: percentage[i].type };
      newArr.push(felt);
      // const done =
      // const filtered = ok.slice(0, i + 1);
      // console.log(filtered);
      // const filterer = filtered.reduce((acc, real) => {
      //   return acc + real.percenta;
      // }, 0);
      // if (i > 1) {
      //   return {
      //     type: ok[i].type,
      // start: 0,
      //     end: ok[i].percentage,
      //   };
      // } else {
      //   return {
      //     type: ok[i].type,
      //     start: filterer,
      //     end: filterer + ok[i].percenta,
      //   };
      // }
    }
  };
  gradient();
  console.log(newArr);
  // console.log(newArr[0].tohundred);
  const coloring = [`${colors[newArr[0]]} 0% `];
  const coloured = () => {
    for (let i = 0; i < newArr.length; i++) {}
  };
  // console.log(gradient());
  console.log(percentage);
  console.log(coloring);

  console.log(colors);
  console.log(met1);
  console.log(met);
  console.log(total);
  return (
    <section className="dashboard-body">
      <div className="total-card">
        <p>
          <span>{total}</span>
          spent
        </p>
        <button>See List</button>
      </div>
      <div className="line-chart" />
      <div className="line-color">
        {met.map((meet, index) => {
          const back = colors[meet];
          console.log(back);
          console.log(meet);
          return <Dash meet={meet} key={index} color={colors} />;
        })}
      </div>
    </section>
  );
};

export default DashboardBody;
