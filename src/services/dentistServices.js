import { dentistInstance } from "./dentistInstance";

export const getDentists = () => {
  let dentists = dentistInstance.get();
  return dentists;
};
export const getDentistById = (id) => {
  let dentist = dentistInstance.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return dentist;
};
