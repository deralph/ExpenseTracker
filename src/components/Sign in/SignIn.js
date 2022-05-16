import React, { useState } from "react";
import Register from "./Register";
import "./Signin.css";
import Signup from "./Signup";

const SignIn = () => {
  const [signin, setSignin] = useState(false);

  return (
    <section className="signin">
      <div className="semi-bg" />
      {signin ? <Signup /> : <Register />}
      {signin || (
        <footer>
          already a user? <span onClick={() => setSignin(true)}>sign in </span>
        </footer>
      )}
    </section>
  );
};

export default SignIn;
