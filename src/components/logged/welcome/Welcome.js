import React from "react";
import "./Welcome.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/Context";
import Logout from "../../dashboard/Logout";
const Welcome = () => {
  const { signout } = useGlobal();
  const navigate = useNavigate();
  return (
    <section className="welcome">
      <div className="welcome-cont">
        <p>
          <span>Welcome</span> Start your journey to tracking your expense in a
          more reliable way with no worries
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
      <Logout />
    </section>
  );
};

export default Welcome;
