import React from "react";
import img from "../../../Geulgram/20220501163514.jpg";
import Card from "./Card";
import "./testi.css";

const userData = [
  {
    id: 1,
    img: img,
    testimony:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolores amet sed porro, illum hic nam quidem mollitia eaque ullam vitae molestiae esse suscipit facere molestias enim, quaerat laboriosam in?",
    name: "ogundele anointing",
  },
  {
    id: 2,
    img: img,
    testimony:
      "fuck you dolor sit amet consectetur, adipisicing elit. Omnis dolores amet sed porro, illum hic nam quidem mollitia eaque ullam vitae molestiae esse suscipit facere molestias enim, quaerat laboriosam in?",
    name: "ayomikun endurance",
  },
  {
    id: 3,
    img: img,
    testimony:
      "ok Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolores amet sed porro, illum hic nam quidem mollitia eaque ullam vitae molestiae esse suscipit facere molestias enim, quaerat laboriosam in?",
    name: "samuel olabolurunshaye",
  },
];
const Testi = () => {
  return (
    <section className="testi">
      <h3>Testimonial</h3>
      <article className="test1">
        {userData.map((user) => {
          return <Card key={user.id} {...user} />;
        })}
      </article>
    </section>
  );
};

export default Testi;
