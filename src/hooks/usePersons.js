// import { useContext, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { getPerson } from "../services/persons";

export function usePerson(name) {
  const { person, setPerson } = useState("");
  async function loadPerson(name) {
    try {
      const { data } = await getPerson(name);
      setPerson(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadPerson(name);
    return function cleanup() {};
  }, [person]);

  return person;
}
