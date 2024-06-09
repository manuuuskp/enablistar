import React from "react";
import { MdHome } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { PAGE_NAME } from "../../constants/constants";

const Header = () => {
  const location = useLocation();
  const pathKey = Object.keys(PAGE_NAME).find((key) =>
    location.pathname.includes(key)
  );
  const page = PAGE_NAME[pathKey ?? "home"];

  return (
    <div className="h-16 p-4 top-0 fixed w-full bg-gradient-to-r from-violet-900 to-blue-950">
      <div className="flex justify-between text-white font-bold items-center align-middle">
        <div className="flex">
          {page?.icon}
          <span className="ml-3 mt-0.5">{page?.name}</span>
        </div>
        <div>
          <MdAccountCircle size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
