import React from "react";
import ArrowIcon from "../../assets/RightArrowIcon.png";

const RightArrowIcon = ({ top }) => {
  return (
    <img
      src={ArrowIcon}
      alt="Right Arrow Icon"
      style={{
        position: "absolute",
        top,
        right: "25rem",
        transform: "translateY(-50%)",
        width: "50px",
        height: "50px",
      }}
    />
  );
};

export default RightArrowIcon;
