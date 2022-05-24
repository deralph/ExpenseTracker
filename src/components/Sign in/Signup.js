import React, { useState } from "react";
import "./Signin.css";
import { controlSubmit } from "./Register";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <form action="" className="sign">
      <h3>sign in</h3>
      <p>if you are registered</p>
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={pass}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={controlSubmit}>sign in</button>
    </form>
  );
};

export default Signup;
