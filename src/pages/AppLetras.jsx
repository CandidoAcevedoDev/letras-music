import React from "react";
import useLetras from "../hooks/useLetras";
import Formulario from "../components/forms/Formulario";
import Alert from "../components/errors/Alert";

const AppLetras = () => {
  const { alert } = useLetras();

  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>

      <Formulario />

      <main>{alert && <Alert>{alert}</Alert>}</main>
    </>
  );
};

export default AppLetras;
