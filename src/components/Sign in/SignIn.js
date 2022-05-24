import React, { useState } from "react";
import Register from "./Register";
import "./Signin.css";
import Signup from "./Signup";
import { useGlobal } from "../context/Context";

const SignIn = () => {
  const { signIn, setSignIn } = useGlobal();
  // const [signin, setSignin] = useState(false);

  return (
    <section className="signin">
      <div className="semi-bg" />
      {signIn ? <Signup /> : <Register />}
      {signIn ? (
        <footer>
          not yet a user?{" "}
          <span onClick={() => setSignIn(false)}>register </span>
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
