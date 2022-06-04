import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleExpense = () => {
  const { id } = useParams();
  return <section>{id}</section>;
};

export default SingleExpense;
