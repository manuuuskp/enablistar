import React from "react";
import { GrDocumentUser } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { PAGE_NAME } from "../../constants/constants";

const Header = () => {
  const location = useLocation();
  const pageName = PAGE_NAME[location.pathname];

  return (
    <div className="h-16 p-4 top-0 fixed w-full bg-gradient-to-r from-violet-900 to-blue-950">
      <div className="flex justify-between text-white font-bold items-center">
        <div className="flex">
          <GrDocumentUser size={25} />
          <span className="ml-5">{pageName ?? "Home"}</span>
        </div>
        <div>
          <MdAccountCircle size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
