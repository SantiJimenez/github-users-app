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
      <h1 className="text-left text-2xl font-bold text-left p-5">
        Top 5 GitHub Users
      </h1>
      <p className="text-left text-gray-800 p-5">
        Tap the username to see more information
      </p>
      <div className="flex flex-wrap w-full">
        {personsList.map((person) => {
          return (
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded"
              to={`person/${person}`}
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
