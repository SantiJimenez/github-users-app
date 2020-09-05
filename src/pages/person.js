import React, { Fragment, useState } from "react";
import { useParams } from "react-router";

const Person = () => {
  const { name } = useParams();

  return (
    <Fragment>
      <h1>Person {name}</h1>
    </Fragment>
  );
};

export default Person;
