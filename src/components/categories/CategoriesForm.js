import React, { useState } from "react";
import { useGlobal } from "../context/Context";
import img from "../../Geulgram/naira-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import Back from "../Back";

const CategoriesForm = ({ back }) => {
  const timing = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "short",
  });
  const { form, setForm, currentuser, addDoc, colRef, serverTimestamp } =
    useGlobal();
  const Navigate = useNavigate();
  const focus = (e) => {
    e.target.type = "date";
  };

  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [msg, setMsg] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      email: currentuser,
      month: new Date().toLocaleDateString("en-us", { month: "long" }),
      createdAt: serverTimestamp(),
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.category.trim() === "" ||
      form.date.trim() === "" ||
      form.price.trim() === "" ||
      form.productName.trim() === "" ||
      form.productNo.trim() === ""
    ) {
      setShowAlert(true);
      setAlert(true);
      setMsg("please enter all input");
    } else if (isNaN(form.price)) {
      setAlert(true);
      setMsg("Enter correct inputs");
      setShowAlert(true);
    } else if (form.productNo < 1) {
      setAlert(true);
      setMsg("Number of product can't be less than 1");
      setShowAlert(true);
    } else if (
      form.category &&
      form.date &&
      form.price &&
      form.productName &&
      form.productNo
    ) {
      setForm({ ...form, form });
      addDoc(colRef, form)
        .then(() => {
          setLoading(true);
          setShowAlert(true);
          setAlert(false);
          setMsg("submitted sucessfully");
          setTimeout(() => {
            setShowAlert(false);
          }, 1000);
          console.log("added");
          Navigate("/dashboard");
          setForm({
            productName: "",
            price: "",
            date: "",
            productNo: "",
            category: "",
          });
        })
        .catch((err) => {
          console.log(err.message);
          setShowAlert(true);
          setAlert(true);
          setMsg("unable to submit form");
        });
    }
  };

  return (
    <section
      className="signin"
      style={{ padding: "50px 0 100px", minHeight: "800px" }}
    >
      {back && <Back />}
      <div className="semi-bg" />
      <article className="sign-article">
        <form action="" className="sign">
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
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleForm}
            placeholder="Description"
          ></textarea>
          <button onClick={handleSubmit} disabled={loading}>
            Submit
          </button>
        </form>
        <p className="info-p">
          Kindly note that all prices entered should be in NAIRA{" "}
          <img src={img} alt="naira" className="naira" />
        </p>
      </article>
    </section>
  );
};

export default CategoriesForm;
