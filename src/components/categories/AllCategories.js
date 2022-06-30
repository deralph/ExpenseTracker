import React, { useEffect, useState } from "react";
import { useGlobal } from "../context/Context";
import Sidebar from "../dashboard/Sidebar/Sidebar";
import Expenses from "../expenses/Expenses";
import { sets } from "../../quotesDB";
import "./categories.css";
import Back from "../Back";

const AllCategories = () => {
  const { results, sidebar, reduceFunction } = useGlobal();
  const [pro, setPro] = useState("");

  const [datas, setDatas] = useState(results);
  useEffect(
    () => setDatas(results.filter((type) => type.price * type.productNo > pro)),
    [pro, results]
  );

  const max = results
    .map(({ price, productNo }) => price * productNo)
    .reduce((then, now) => {
      return now > then ? now : then;
    }, 0);

  const monthOptions = ["all", ...sets(results, "month")];
  const options = ["all", ...sets(results, "category")];

  const handleAll = (opt, type) => {
    if (opt === "all") {
      setDatas(results);
    } else {
      setDatas(results.filter((sold) => sold[type] === opt));
    }
  };

  return (
    <>
      <Back />
      <div className="dashboard">
        {" "}
        <Sidebar
          category={options}
          month={monthOptions}
          pro={pro}
          setPro={setPro}
          handleAll={handleAll}
          max={max}
        />
        <div className={sidebar ? "all-side overflow" : "all-side"}>
          <p className="total-p">Total : {reduceFunction(datas)}</p>
          <Expenses data={datas} type=" Expenses" />{" "}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
