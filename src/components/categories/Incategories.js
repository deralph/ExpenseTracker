import React from "react";

import "./categories.css";

const Incategories = ({ title, Icon, color }) => {
  const Red = Icon;
  return (
    <div className="cate">
      <Red className="caticon" style={{ background: `${color}` }} />
      <p>{title}</p>
    </div>
  );
};

export default Incategories;
