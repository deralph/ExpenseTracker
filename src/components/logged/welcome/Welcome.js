import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-cont">
        <p>
          <span>Welcome</span> Start your journey to tracking your expense with
          no worries and more reliable
        </p>
        <div className="welcome-btn">
          <button>
            get started
            <ul className="inlist">
              <li>future expense</li>
              <li> present expense</li>
            </ul>
          </button>
          <button>view categories</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
