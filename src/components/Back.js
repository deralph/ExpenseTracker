import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BiArrowBack
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          padding: "15px",
          color: "#eee",
          background: "#333",
          opacity: "0.7",
          borderRadius: "50%",
          zIndex: "100",
        }}
      />
    </div>
  );
};

export default Back;
