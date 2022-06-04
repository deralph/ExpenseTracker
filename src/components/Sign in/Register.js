import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../context/Context";

const Register = () => {
  const { signup } = useGlobal();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [alert, setAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const [msg, setMsg] = useState("");
  const Navigate = useNavigate();
  const controlSubmit = async (e) => {
    e.preventDefault();
    if (
      form.fullname.trim() === "" ||
      form.email.trim() === "" ||
      form.password.trim() === "" ||
      form.confirmPass.trim() === ""
    ) {
      setAlert(true);
      setMsg("please enter all input");
    } else if (form.password !== form.confirmPass) {
      setAlert(true);
      setMsg("confirm your password correctly");
    } else if (
      form.fullname &&
      form.email &&
      form.password &&
      form.confirmPass
    ) {
      setAlert(false);
      setMsg("submitted sucessfully");
      setTimeout(() => {
        setMsg("");
      }, 1000);
      try {
        setloading(true);
        await signup(form.email, form.password);
        navigate("/welcome");
      } catch (error) {
        console.log(error.message);
      }
      setForm({ fullname: "", emailAdd: "", password: "", confirmPass: "" });
      Navigate("/welcome");
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  return (
    <form action="" className="sign">
      <h3>register</h3>
      <p>if you don't have an account</p>
      {msg && <p className={`alert ${alert ? "fail" : "sucess"}`}>{msg}</p>}
      <input
        type="email"
        name="fullname"
        id="fullname"
        value={form.fullname}
        placeholder="Full Name"
        onChange={handleForm}
        required
      />
      <input
        type="email"
        value={form.emailAdd}
        name="emailAdd"
        id="emailAdd"
        placeholder="Email Address"
        onChange={handleForm}
        required
      />
      <input
        type="password"
        value={form.password}
        id="password"
        name="password"
        placeholder="Password"
        onChange={handleForm}
        required
      />
      <input
        type="password"
        value={form.confirmPass}
        id="comfirmPass"
        name="confirmPass"
        placeholder="Confirm Password"
        onChange={handleForm}
        required
      />
      <button onClick={controlSubmit} disabled={loading}>
        Register
      </button>
    </form>
  );
};

export default Register;
