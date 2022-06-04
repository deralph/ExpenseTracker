import React, { useState } from "react";
import "./Signin.css";
import { useGlobal } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { result, login } = useGlobal();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const controlSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || pass.trim() === "") {
      setAlert(true);
      setMsg("please enter all input");
    } else if (email && pass) {
      setMsg("");
      setAlert(false);
      setMsg("submitted sucessfully");
      setTimeout(() => {
        setMsg("");
      }, 1000);
      setEmail("");
      setEmail("");
      try {
        setloading(true);
        await login(email, pass);
        navigate("/dashboard");
      } catch (error) {
        console.log(error.message);
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
