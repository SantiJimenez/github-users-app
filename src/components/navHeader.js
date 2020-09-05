import React from "react";

const NavHeader = ({ title }) => {
  return (
    <div className="w-full bg-gray-800 text-center py-4">
      <p className="text-white font-bold">{title}</p>
    </div>
  );
};

export default NavHeader;
