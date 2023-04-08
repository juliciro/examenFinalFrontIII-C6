import React from "react";
import { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageMail, setErrorMessageMail] = useState("");

  const handleChangeName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleChangeMail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const validateUserName = (str) => {
    if (str.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const validateUserMail = (str) => {
    if (str.length > 0) {
      setErrorMail(false);
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = validateUserName(user.name);
    const mailIsValid = validateUserMail(user.email);

    if (!mailIsValid) {
      setErrorMail(true);
      setErrorMessageMail("Por Favor ingrese un correo");
      return;
    } else {
      setErrorMail(false);
    }
    if (!nameIsValid) {
      setError(true);
      setErrorMessage("Por Favor verifique su información nuevamente");
      return;
    } else {
      setError(false);
    }
    setError(false);
    setSubmitSuccess(true);
    console.log("data : ", user);
  };

  return (
    <div className="container">
      <h1>Contáctenos</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Nombre Completo"
          type="text"
          name="name"
          onChange={handleChangeName}
        />
        {error && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessage}
          </span>
        )}

        <input
          placeholder="Correo Electrónico"
          type="email"
          name="Correo Electrónico"
          onChange={handleChangeMail}
        />
        {errorMail && (
          <span style={{ color: "red", fontSize: "0.7rem" }}>
            {errorMessageMail}
          </span>
        )}

        <button type="submit">Enviar</button>
      </form>
      {submitSuccess && (
        <span style={{ color: "blue", fontSize: "0.7rem" }}>
          Gracias {user.name} te contactaremos cuando antes vía mail.
        </span>
      )}
    </div>
  );
};

export default Contact;
