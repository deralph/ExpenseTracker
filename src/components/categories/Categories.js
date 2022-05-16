import React from "react";
import Incategories from "./Incategories";
import { GiMoneyStack, GiClothes } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import {
  MdLocalGroceryStore,
  MdOutlineFoodBank,
  MdElectricalServices,
  MdToys,
  MdOutlineEmojiTransportation,
} from "react-icons/md";
import { BiDrink } from "react-icons/bi";

const Categories = () => {
  return (
    <section className="category">
      <Incategories title="clothes" Icon={GiClothes} color="#993377" />
      <Incategories
        title="grocery"
        Icon={MdLocalGroceryStore}
        color="skyblue"
      />
      <Incategories
        title="drinks"
        Icon={BiDrink}
        color="rgba(165, 42, 42, 0.514)"
      />
      <Incategories title="foods" Icon={MdOutlineFoodBank} color="peachpuff" />
      <Incategories
        title="electric"
        Icon={MdElectricalServices}
        color="blueviolet"
      />
      <Incategories title="home expenses" Icon={FaHome} color="yellowgreen" />
      <Incategories
        title="transport"
        Icon={MdOutlineEmojiTransportation}
        color="grey"
      />
      <Incategories title="miscellenous" Icon={MdToys} color="yellow" />
      <Incategories
        title="others"
        Icon={GiMoneyStack}
        color="rgb(255, 0, 157)"
      />
      <Incategories
        title="accesories"
        Icon={GiClothes}
        color="rgb(255, 0, 157)"
      />
    </section>
  );
};

export default Categories;
