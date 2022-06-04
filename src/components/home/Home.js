import React from "react";
import Consult from "../consult/Consult";
import Foot from "../Foot";
import About from "./about/About";
import Body from "./body/Body";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import "./home.css";
import LetKeepRecord from "./keep_record/LetKeepRecord";
import Navbar from "./navbar/Navbar";
import Testi from "./testimonials/Testi";
// import Signinform from "../../AnotherTest";
// import { SigninForm } from "../../TestingAuthAndDB";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body />
      <About />
      <LetKeepRecord />
      <Features />
      <Testi />
      <Consult />
      <Footer />
      <Foot />
      {/* <Signinform /> */}
      {/* <SigninForm /> */}
    </>
  );
};

export default Home;
