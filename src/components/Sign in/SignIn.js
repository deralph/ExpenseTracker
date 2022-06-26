import React from "react";
import Register from "./Register";
import "./Signin.css";
import Signup from "./Signup";
import { useGlobal } from "../context/Context";

const SignIn = () => {
  const { signIn } = useGlobal();
  return (
    <section className="signin">
      <div className="semi-bg" />
      {signIn ? <Signup /> : <Register />}
    </section>
  );
};

export default SignIn;
