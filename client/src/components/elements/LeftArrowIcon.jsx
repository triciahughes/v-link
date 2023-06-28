import React from "react";
import ArrowIcon from "../../assets/LeftArrowIcon.png";

const LeftArrowIcon = ({ top }) => {
  return (
    <img
      src={ArrowIcon}
      alt="Left Arrow Icon"
      style={{
        position: "absolute",
        top,
        left: "25rem",
        transform: "translateY(-50%)",
        width: "50px",
        height: "50px",
      }}
    />
  );
};

export default LeftArrowIcon;
