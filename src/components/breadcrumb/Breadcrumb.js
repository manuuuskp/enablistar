import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="m-1">
            {index < items.length - 1 ? (
              <>
                <Link to={item.href} className="m-1">
                  {item.label}
                </Link>
                <span>/</span>
              </>
            ) : (
              <span className="font-bold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
