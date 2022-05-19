import React from "react";
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

const expense = ({ productName, price, category, productNo, date }) => {
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
      title: "micellenous",
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
    <div className="expense">
      <div>
        {set_of_info.map((icon) => {
          const Red = icon.Icon;
          if (icon.title === category) {
            return (
              <Red
                style={{ background: `${icon.color}` }}
                className="exp-icon"
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="exp">
        <p className="exp-name">{productName}</p>
        <p className="exp-date">{date}</p>
      </div>
      <div className="exp">
        <p className="exp-price">{price * productNo}</p>
        <p className="exp-date">{category}</p>
      </div>
    </div>
  );
};

export default expense;
