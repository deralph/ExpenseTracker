import React, { useContext, useReducer } from "react";
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

const AppProvider = React.createContext();
export const useIcons = () => {
  const allIcons = [
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
      title: "home",
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
  return allIcons;
};

const Context = ({ children, initialState, reducer }) => {
  return (
    <AppProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobal = () => useContext(AppProvider);

export default Context;
