import React, { useState } from "react";
import "./consult.css";

const handleSub = (e) => {
  e.preventDefault();
};
const Consult = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section className="consult">
      <h3>Consult Us</h3>
      <div className="consult-1">
        <div className="consult-text">
          <p>
            Need a Consultation ? <br />
            Contact Us and We Will <br /> Help You
          </p>
        </div>
        <div className="form-1">
          <form action="" className="form">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="emmail"
              name="email"
              id="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn" onClick={handleSub}>
              send now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consult;
