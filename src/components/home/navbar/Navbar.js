import React, { useEffect, useState } from "react";
import "./navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobal } from "../../context/Context";

const Navbar = () => {
  const { setSignIn } = useGlobal();
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
            <li>
              <Link to="signin" onClick={() => setSignIn(true)}>
                Log in
              </Link>
            </li>
            <li>
              <Link to="signin" onClick={() => setSignIn(false)}>
                Register
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
