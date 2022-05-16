import React, { useEffect, useState, useCallback } from "react";
// import { controlSubmit } from "../Sign in/Register";
import { useGlobal } from "../context/Context";
const CategoriesForm = () => {
  const timing = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
  });
  const [state, dispatch] = useGlobal();
  const getLocaiStorage = useCallback(() => {
    let _expenses = localStorage.getItem("results");
    if (_expenses) {
      return (_expenses = JSON.parse(localStorage.getItem("results")));
    } else {
      return [];
    }
  }, []);
  const focus = (e) => {
    e.target.type = "date";
  };
  const [form, setForm] = useState({
    productName: "",
    price: "",
    date: "",
    productNo: "",
    category: "",
  });

  const [results, setResults] = useState(getLocaiStorage());
  const [alert, setAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.category.trim() === "" ||
      form.date.trim() === "" ||
      form.price.trim() === "" ||
      form.productName.trim() === "" ||
      form.productNo.trim() === ""
    ) {
      dispatch({ type: "CHECK_OK", payload: false });
      setShowAlert(true);
      setAlert(true);
      setMsg("please enter all input");
    }
    if (
      form.category &&
      form.date &&
      form.price &&
      form.productName &&
      form.productNo
    ) {
      setShowAlert(true);
      setAlert(false);
      setMsg("submitted sucessfully");
      const result = { id: new Date().getTime().toString(), ...form };
      setResults([...results, result]);
      console.log(results);
      // console.log(resulter);
      console.log(result);
      setForm({
        productName: "",
        price: "",
        date: timing,
        productNo: "",
        category: "",
      });
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  };
  useEffect(() => {
    getLocaiStorage();
    console.log(results);
    console.log(getLocaiStorage());
    console.log(state);
    dispatch({ type: "SET_EXPENSES", payload: results });
  }, [results, getLocaiStorage]);

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
    // console.log(form.date);
  }, [form, results]);
  useEffect(() => {
    const meet = new Date().toLocaleDateString("en-us", { month: "short" });
    const meet1 = new Date().toLocaleDateString("en-us", { day: "numeric" });
    const meet2 = new Date().toLocaleDateString("en-us", { weekday: "long" });
    const meet3 = new Date().toLocaleDateString("en-us", { year: "numeric" });
    const meets = [meet, meet1, meet2];
    const meeter = meets.join(" ");
    console.log(meet, meet1, meet2, meet3, meets, meeter);
    console.log(timing);
    // console.log(results);
  }, [timing]);
  return (
    <section className="categoryForm">
      <div className="semi-bg" />
      <form action="" className="sign">
        {/* <h3>register</h3> */}
        <h3>Enter product details</h3>
        {showAlert && (
          <p className={`alert ${alert ? "fail" : "sucess"}`}>{msg}</p>
        )}
        <input
          type="email"
          name="productName"
          id="productName"
          value={form.productName}
          placeholder="Product Name"
          onChange={handleForm}
          required
        />
        <input
          type="email"
          value={form.price}
          name="price"
          id="price"
          placeholder="Price"
          onChange={handleForm}
          required
        />
        <input
          type="number"
          value={form.productNo}
          id="productNo"
          name="productNo"
          placeholder="No. of product"
          onChange={handleForm}
          required
        />
        <input
          type="text"
          value={form.date}
          id="date"
          name="date"
          placeholder={timing}
          onChange={handleForm}
          onFocus={focus}
          required
        />
        <select
          name="category"
          id="category"
          value={form.category}
          onChange={handleForm}
        >
          <option value="">Select Categories</option>
          <option value="cloth">Clothes</option>
          <option value="accesories">Accesories</option>
          <option value="grocery">Grocery</option>
          <option value="drinks">Drinks</option>
          <option value="foods">Foods</option>
          <option value="electric">Electric</option>
          <option value="home">Home Expenses</option>
          <option value="transport">Transport</option>
          <option value="micellenous">Micellenous</option>
          <option value="others">Others</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
        <p>{form.date}</p>
      </form>
    </section>
  );
};

export default CategoriesForm;
