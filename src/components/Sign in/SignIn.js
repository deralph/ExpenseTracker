import React, { useState } from "react";
import Register from "./Register";
import "./Signin.css";
import Signup from "./Signup";
import { useGlobal } from "../context/Context";
import { Link } from "react-router-dom";

const SignIn = () => {
  const { signIn, setSignIn } = useGlobal();
  return (
    <section className="signin">
      <div className="semi-bg" />
      {signIn ? <Signup /> : <Register />}
      {signIn ? (
        <footer>
          not yet a user?{" "}
          <span onClick={() => setSignIn(false)}>register </span>
          <Link
            to="/password-reset"
            style={{ display: "block", textAlign: "center" }}
          >
            forgot password?
          </Link>
        </footer>
      ) : (
        <footer>
          already a user? <span onClick={() => setSignIn(true)}>sign in </span>
        </footer>
      )}
    </section>
  );
};

export default SignIn;
