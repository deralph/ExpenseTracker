import React from "react";
import Feature from "./Feature";
import { GiMoneyStack } from "react-icons/gi";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <GiMoneyStack className="iconz" />
      {/* <Feature icon={} title='' note=''/>
      <Feature icon={} title='' note=''/>
      <Feature icon={} title='' note=''/> */}
    </section>
  );
};

export default Features;
