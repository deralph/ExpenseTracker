import React from "react";
import "./sidebar.css";
import { RiEqualizerLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";

const Sidebar = ({ category, month, pro, setPro, handleAll, max }) => {
  return (
    <aside className="sidebar">
      {category ? (
        ""
      ) : (
        <ul className="side-basic">
          <li>View Categories</li>
          <li>All Expenses</li>
          <li>Add Expenses</li>
          <li>Book Consultation</li>
          <li>Seek Financial Advice</li>
        </ul>
      )}
      <p className="out">
        Log Out
        <MdLogout style={{ marginLeft: "10px" }} />
      </p>
      {category && (
        <>
          <h3>
            <RiEqualizerLine style={{ marginRight: "10px" }} />
            filter by:
          </h3>
          <ul className="side-ul">
            <p>by category</p>
            {category.map((option, index) => {
              return (
                <li onClick={() => handleAll(option, "category")} key={index}>
                  {option}
                </li>
              );
            })}
          </ul>
          <ul className="side-ul">
            <p>by month</p>
            {month.map((option, index) => {
              return (
                <li onClick={() => handleAll(option, "month")} key={index}>
                  {option}
                </li>
              );
            })}
          </ul>
          <label htmlFor="range">by price</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max={max}
            step="5"
            value={pro}
            onChange={(e) => setPro(e.target.value)}
            style={{ width: "100%" }}
          />
          <p className="range-p">{pro}</p>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
