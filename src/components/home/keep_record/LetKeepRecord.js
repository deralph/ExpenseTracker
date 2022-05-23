import React from "react";
import "./record.css";
import img from "../../../Geulgram/youtuber-ga11fe1cbc_640.jpg";

const LetKeepRecord = () => {
  return (
    <section className="record">
      <div className="record-img">
        <div className="record-img-2"></div>
        {/* <img
          src={img}
          alt="a man trying to figure out comething"
          style={{ zIndex: "-1" }}
        /> */}
      </div>
      <div className="record-cont">
        <p>
          Don't get stuck trying to figure out how you spent your money, we have
          got you covered.
        </p>
        <p>Let's keep record of your expenses for you</p>
        <div className="btn-cont">
          <button>login</button>
          <button>register</button>
        </div>
      </div>
    </section>
  );
};

export default LetKeepRecord;
