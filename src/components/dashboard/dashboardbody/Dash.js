import React from "react";
import "./dashboardBody.css";

const Dash = ({ color, meet }) => {
  //   console.log(meet);
  return (
    <div className="dash">
      <div className="line-box" style={{ background: color[meet] }} />
      <p>{meet}</p>
    </div>
  );
};

export default Dash;
