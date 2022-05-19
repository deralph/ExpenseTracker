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
  const set_of_info = [
    {
      title: "cloth",
      Icon: GiClothes,
      color: "#993377",
    },
    {
      title: "grocery",
      Icon: MdLocalGroceryStore,
      color: "skyblue",
    },
    {
      title: "drinks",
      Icon: BiDrink,
      color: "rgba(165, 42, 42, 0.514)",
    },
    {
      title: "foods",
      Icon: MdOutlineFoodBank,
      color: "peachpuff",
    },
    {
      title: "electric",
      Icon: MdElectricalServices,
      color: "blueviolet",
    },
    {
      title: "home expenses",
      Icon: FaHome,
      color: "yellowgreen",
    },
    {
      title: "transport",
      Icon: MdOutlineEmojiTransportation,
      color: "grey",
    },
    {
      title: "accesories",
      Icon: GiClothes,
      color: "rgb(255, 0, 157)",
    },
    {
      title: "miscellenous",
      Icon: MdToys,
      color: "yellow",
    },
    {
      title: "others",
      Icon: GiMoneyStack,
      color: "rgb(255, 0, 157)",
    },
  ];
  return (
    <section className="category">
      {set_of_info.map((category) => {
        return <Incategories {...category} key={category.title} />;
      })}
      {/* <Incategories
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
      <Incategories
        title="accesories"
        Icon={GiClothes}
        color="rgb(255, 0, 157)"
      />
      <Incategories title="miscellenous" Icon={MdToys} color="yellow" />
      <Incategories
        title="others"
        Icon={GiMoneyStack}
        color="rgb(255, 0, 157)"
      /> */}
    </section>
  );
};

export default Categories;