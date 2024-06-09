import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const PageWrapper = ({ children, handleBack }) => {
  return (
    <div>
      <button className="flex items-center" onClick={handleBack}>
        <IoMdArrowRoundBack />
        Back
      </button>
      {children}
    </div>
  );
};

export default PageWrapper;
