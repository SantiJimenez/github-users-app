import axios from "axios";

export function getPerson(person) {
  return axios.get(`https://api.github.com/users/${person}`);
}
