import React from "react";
import "./sidebar.css";
import { RiEqualizerLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logo from "../../home/logo/Logo";

const Sidebar = ({ category, month, pro, setPro, handleAll, max }) => {
  const navigate = useNavigate();
  const { sidebar, signout } = useGlobal();
  const subject =
    "Hi \n I am ________ \n I am writting to you in subject to the website expensetracked.netlify.app \n I would love to seek financial advice towards ______, \n Thanks";
  return (
    <aside className={sidebar ? "sidebar show" : "sidebar"}>
      {" "}
      {!category ? (
        <>
          <ul className="side-basic">
            <Logo show={true} style={{ marginBottom: "30px" }} />
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
            <a href={`mailto:deralph73@gmail.com?subject=${subject}`}>
              <li>Seek Financial Advice</li>
            </a>
          </ul>
          <p
            className="out"
            onClick={() => {
              signout();
              navigate("/");
            }}
          >
            Log Out
            <MdLogout style={{ marginLeft: "10px" }} />
          </p>
        </>
      ) : (
        <>
          <Logo show={true} className="side-logo" />
          <h3>
            <RiEqualizerLine style={{ margin: "20px 10px 0 20px" }} />
            filter by:
          </h3>
          <ul className="side-ul">
            <p>By category</p>
            {category.map((option, index) => {
              return (
                <li onClick={() => handleAll(option, "category")} key={index}>
                  {option}
                </li>
              );
            })}
          </ul>
          <ul className="side-ul">
            <p>By month</p>
            {month.map((option, index) => {
              return (
                <li onClick={() => handleAll(option, "month")} key={index}>
                  {option}
                </li>
              );
            })}
          </ul>
          <label htmlFor="range">By price</label>
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max={max - 1}
            value={pro}
            onChange={(e) => setPro(e.target.value)}
            style={{ width: "100%" }}
          />
          <p className="range-p">{pro}</p>{" "}
          <p
            className="out"
            onClick={() => {
              signout();
              navigate("/");
            }}
          >
            Log Out
            <MdLogout style={{ marginLeft: "10px" }} />
          </p>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
