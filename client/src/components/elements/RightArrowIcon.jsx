import React from "react";
import ArrowIcon from "../../assets/RightArrowIcon.png";

const RightArrowIcon = ({ top }) => {
  return (
    <img
      onClick={() => console.log("Right arrow clicked")}
      src={ArrowIcon}
      alt="Right Arrow Icon"
      style={{
        position: "absolute",
        top,
        right: "20rem",
        transform: "translateY(-50%)",
        width: "50px",
        height: "50px",
      }}
    />
  );
};

export default RightArrowIcon;
