import React from "react";
import { useNavigate } from "react-router-dom";

const FinalizeCharacterBtn = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <button
        type="submit"
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-1/3 justify-center rounded-md bg-blue-500 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onSubmit={() => {}}
        onClick={handleSubmit}
      >
        Finalize Avatar
      </button>
    </div>
  );
};

export default FinalizeCharacterBtn;
