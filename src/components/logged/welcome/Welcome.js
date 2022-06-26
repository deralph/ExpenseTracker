import React from "react";
import "./Welcome.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import { MdLogout } from "react-icons/md";

const Welcome = () => {
  const { signout } = useGlobal();
  const navigate = useNavigate();
  return (
    <section className="welcome">
      <div className="welcome-cont">
        <p>
          <span>Welcome</span> Start your journey to tracking your expense with
          no worries and more reliable
        </p>
        <div className="welcome-btn">
          <Link to="/expenseForm">
            <button>get started</button>
          </Link>
          <Link to="/categories">
            <button> View Categories </button>
          </Link>
        </div>
      </div>{" "}
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
    </section>
  );
};

export default Welcome;
