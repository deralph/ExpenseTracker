import React from "react";
import img from "../../Geulgram/naira-removebg-preview.png";
import "./categories.css";

const Incategories = ({ title, Icon, color, percent, percenta }) => {
  const Red = Icon;
  return (
    <div className="cate">
      <>
        <Red className="caticon" style={{ background: `${color}` }} />
        <p>{title}</p>
        {percent && (
          <>
            <p style={{ display: "flex", alignItems: "center" }}>
              price : <img src={img} alt="naira" className="naira" />
              <span style={{ color: "#0033ff" }}> {percent}</span>
            </p>
            <p>
              percent : <span style={{ color: "#0033ff" }}> {percenta}%</span>
            </p>
          </>
        )}
      </>
    </div>
  );
};

export default Incategories;
