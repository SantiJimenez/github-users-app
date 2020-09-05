import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";

import NavHeader from "../components/navHeader";

import { usePerson } from "../hooks/usePersons";

const Person = () => {
  const { name } = useParams();

  const person = usePerson(name);

  useEffect(() => {
    if (person) {
      console.log(person);
    }
  }, [person]);

  return (
    <Fragment>
      <NavHeader title="Home" backButton="active" />
      {person ? (
        <>
          <div className="flex p-5">
            <div className="mobile:w-1/5 landscape:w-1/6 tablet:w-1/12 flex items-center">
              <img className="rounded-full" src={person.avatar_url} />
            </div>
            <div className="mobile:w-4/5 landscape:w-5/6 tablet:w-11/12 flex flex-col justify-around flex-wrap p-3">
              <p className="text-left text-18 font-bold">{person.name}</p>
              <p className="text-left text-14">
                {person.location !== null
                  ? person.location
                  : "Location unknown"}
              </p>
            </div>
          </div>
          <div className="divider"></div>
        </>
      ) : null}
    </Fragment>
  );
};

export default Person;
