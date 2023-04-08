import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import DentistCard from "../../common/DentistCard/DentistCard";

const Dentists = ({ items }) => {
  console.log({ items });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {items.map((elemento) => (
          <DentistCard key={elemento.id} elemento={elemento} />
        ))}
      </div>
    </div>
  );
};

export default Dentists;
