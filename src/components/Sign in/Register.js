import React, { useState } from "react";

export const controlSubmit = (e) => {
  e.preventDefault();
};

const Register = () => {
  const [form, setForm] = useState({
    fullname: "",
    emailAdd: "",
    password: "",
    confirmPass: "",
  });

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
      <button onClick={controlSubmit}>sign in</button>
    </form>
  );
};

export default Register;
