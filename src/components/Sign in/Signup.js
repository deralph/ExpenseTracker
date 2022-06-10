import React, { useState } from "react";
import "./Signin.css";
import { useGlobal } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { login } = useGlobal();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const controlSubmit = async (e) => {
    e.preventDefault();
    const regex =
      /^([a-z A-Z 0-9 \._]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/;

    if (email.trim() === "" || pass.trim() === "") {
      setAlert(true);
      setMsg("please enter all input");
    } else if (regex.test(email) === false) {
      setAlert(true);
      setMsg("Incorrect Email");
    } else if (email && pass) {
      setMsg("");
      setAlert(false);
      setTimeout(() => {
        setMsg("");
      }, 1000);
      setEmail("");
      setPass("");
      try {
        setloading(true);
        await login(email, pass);
        setMsg("login sucessfull");
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
        setMsg("failed to login");
      }
      setloading(false);
    }
  };

  return (
    <form action="" className="sign">
      <h3>sign in</h3>
      <p>if you are registered</p>
      {msg && <p className={`alert ${alert ? "fail" : "sucess"}`}>{msg}</p>}
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
      <button onClick={controlSubmit} disabled={loading}>
        sign in
      </button>
    </form>
  );
};

export default Signup;
