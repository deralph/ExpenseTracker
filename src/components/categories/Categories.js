import React from "react";
import Incategories from "./Incategories";
import { useIcons } from "../context/Context";

const Categories = () => {
  const all = useIcons();
  return (
    <section className="category">
      {all.map((category) => {
        return <Incategories {...category} key={category.title} />;
      })}
    </section>
  );
};

export default Categories;
