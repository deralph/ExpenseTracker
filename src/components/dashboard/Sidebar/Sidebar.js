import React from "react";
import "./sidebar.css";
import { RiEqualizerLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/Context";

const Sidebar = ({ category, month, pro, setPro, handleAll, max }) => {
  const navigate = useNavigate();
  const { sidebar, setSidebar, signOut } = useGlobal();
  return (
    <aside className={sidebar ? "sidebar show" : "sidebar"}>
      {" "}
      {category ? (
        ""
      ) : (
        <ul className="side-basic">
          <Link to="categories">
            {" "}
            <li>View Categories</li>
          </Link>
          <Link to="allExpense">
            <li>All Expenses</li>
          </Link>
          <Link to="expenseForm">
            <li>Add Expenses</li>
          </Link>
          <Link to="consultation">
            <li>Book Consultation</li>
          </Link>
          <Link to="#">
            <li>Seek Financial Advice</li>
          </Link>
        </ul>
      )}
      <p
        className="out"
        onClick={() => {
          signOut();
          navigate("/");
        }}
      >
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
