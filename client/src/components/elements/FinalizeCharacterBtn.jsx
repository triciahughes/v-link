import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimation, slideAnimation } from "../../config/motion";

const FinalizeCharacterBtn = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <AnimatePresence>
      <motion.div {...slideAnimation("down")}>
        <button
          type="submit"
          style={{
            position: "fixed",
            left: 600,
            bottom: 15,
            padding: "15px",
            backgroundColor: "#03a9f4",
            color: "white",
            fontSize: "1rem",
            border: "none",
            borderRadius: "7px",
            width: "20%",
            display: "flex",
            justifyContent: "center",
          }}
          onSubmit={() => {}}
          onClick={handleSubmit}
        >
          Finalize Avatar
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default FinalizeCharacterBtn;
