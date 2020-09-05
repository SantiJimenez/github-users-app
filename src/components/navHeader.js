import React from "react";
import { Link } from "react-router-dom";

const NavHeader = ({ title, backButton }) => {
  return (
    <div className="flex flex-row w-full bg-gray-700 py-4 text-18 shadow">
      {backButton ? (
        <div className="absolute top-0 left-0 py-4">
          <Link className="text-white px-4" to={`/`}>
            &#10094; Back
          </Link>
        </div>
      ) : null}
      <div className="flex-grow text-center">
        <p className="text-white font-bold">{title}</p>
      </div>
    </div>
  );
};

export default NavHeader;
