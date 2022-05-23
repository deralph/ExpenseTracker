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
      <div className="consult-text">
        <p>
          Need a Consultation ? <br />
          Contact Us and We Will <br /> Help You
        </p>
      </div>
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
    </section>
  );
};

export default Consult;
