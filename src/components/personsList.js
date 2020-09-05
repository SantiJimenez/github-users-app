import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const PersonsList = () => {
  const personsList = [
    "GrahamCampbell",
    "fabpot",
    "weierophinney",
    "rkh",
    "josh",
  ];

  return (
    <Fragment>
      <h1 className="text-left text-24 font-bold text-left p-5">
        Top 5 GitHub Users
      </h1>
      <p className="text-left text-gray-800 text-16 px-5 pb-5">
        Tap the username to see more information
      </p>
      <div className="flex flex-wrap w-full px-5">
        {personsList.map((person, index) => {
          return (
            <Link
              className="bg-blue_primary hover:bg-blue_secundary text-14 text-white mr-2 mb-2 py-2 px-4 rounded"
              to={`person/${person}`}
              key={index}
            >
              {person}
            </Link>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PersonsList;
