import React, { useEffect, useState } from "react";
import { useGlobal } from "../context/Context";
import Sidebar from "../dashboard/Sidebar/Sidebar";
import Expenses from "../expenses/Expenses";
import { sets } from "../../quotesDB";
import "./categories.css";

const AllCategories = () => {
  const { results, reduceFunction } = useGlobal();
  console.log(results);
  const [pro, setPro] = useState("");

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const go = setTimeout(() => {
      setDatas(results);
    }, 5);
    return () => clearTimeout(go);
  }, [results]);
  useEffect(() => {
    setDatas(results.filter((type) => type.price * type.productNo > pro));
  }, [pro, results]);

  const PriceAndNo = results.map(({ price, productNo }) => price * productNo);

  const proc = PriceAndNo.reduce((then, now) => {
    return now > then ? now : then;
  }, 0);
  console.log(proc);

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
      <div className="dashboard">
        {" "}
        <Sidebar
          category={options}
          month={monthOptions}
          pro={pro}
          setPro={setPro}
          handleAll={handleAll}
          max={proc}
        />
        <div className="all-side">
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontFamily: "sans-serif",
            }}
          >
            Total : {reduceFunction(datas)}
          </p>
          <Expenses data={datas} type=" Expenses" />{" "}
        </div>
      </div>
    </>
  );
};

export default AllCategories;
