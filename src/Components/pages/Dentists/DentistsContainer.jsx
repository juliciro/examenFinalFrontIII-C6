import React, { useContext, useEffect, useState } from "react";
import { getDentists } from "../../../services/dentistServices";

import Dentists from "./Dentists";
import { GlobalContext } from "../../../Context/GlobalContext";

const DentistsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const dentists = getDentists();
    dentists
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ backgroundColor: "black", minHeight: "90vh" }}>
      <Dentists items={state.dentists} />
    </div>
  );
};
export default DentistsContainer;
