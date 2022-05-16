import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  });
  return (
    <nav className={`nav ${show && "nav_bg"}`}>
      <h1>ExpenseTracked</h1>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li className="user">
          <FaRegUserCircle />
          <ul className="in-user">
            <li>Log in</li>
            <li>Register</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
