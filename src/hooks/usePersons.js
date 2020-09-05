// import { useContext, useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { getPerson } from "../services/persons";

export function usePerson(name) {
  const [person, setPerson] = useState("");
  async function loadPerson(name) {
    try {
      if (person === "") {
        const { data } = await getPerson(name);
        setPerson(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadPerson(name);
  }, [person]);

  return person;
}
