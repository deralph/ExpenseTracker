import React, { useEffect } from "react";
import "./categories.css";

const Incategories = ({ title, Icon, color }) => {
  const Red = Icon;
  useEffect(() => {
    console.log(Red);
  });
  return (
    <div className="cate">
      {/* {Icon && <Icon className="caticon" />} */}
      <Red className="caticon" style={{ background: `${color}` }} />
      <p>{title}</p>
    </div>
  );
};

export default Incategories;
