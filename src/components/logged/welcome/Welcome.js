import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-cont">
        <p>
          <span>Welcome</span> Start your journey to tracking your expense with
          no worries and more reliable
        </p>
        <div className="welcome-btn">
          <Link to="/expenseForm">
            <button>
              get started
              {/* <ul className="inlist">
              <li>future expense</li>
              <li> present expense</li>
            </ul> */}
            </button>
          </Link>
          <Link to="/categories">
            <button> View Categories </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
