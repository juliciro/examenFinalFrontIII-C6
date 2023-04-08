import axios from "axios";

export const dentistInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});
