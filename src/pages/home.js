import React, { Fragment } from "react";
import NavHeader from "../components/navHeader";
import PersonList from "../components/personsList";
const Home = () => {
  return (
    <Fragment>
      <NavHeader title="Home" />
      <PersonList />
    </Fragment>
  );
};

export default Home;
