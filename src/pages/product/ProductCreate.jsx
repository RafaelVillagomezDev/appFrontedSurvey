import React, { lazy } from "react";

const NavBar = lazy(() => import("../../components/navBar/NavBar"));
const FormGeneric = lazy(() =>
  import("../../components/formGeneric/FormGeneric")
);
const Footer = lazy(() => import("../../components/footer/Footer"));

import("styles/pages/_survey.scss").then(() => {
  console.log("Survey styles loaded");
});

function ProductCreate() {
  const fields = [
    {
      name: "product",
      id:"producto1",
      label: "Producto",
      required: true,
      placeholder: "Ingresa un producto",
      className: "card_username",
    },
    {
      name: "product",
      id:"producto2",
      label: "Producto",
      required: true,
      placeholder: "Ingresa un producto",
      className: "card_username",
    },
  
  ];

  const regexPatterns = [
    {
      field: "product",
      regex: /^[A-Za-z0-9]{4,}$/,
      msg: "El nombre debe tener letras mayusculas o minusculas y al menos 4 caracteres, no se permiten caracteres especiales.",
    },
    {
      field: "surname",
      regex: /^[A-Za-z0-9]{4,}$/,
      msg: "El apellido debe tener letras mayusculas o minusculas y al menos 4 caracteres , no se permiten caracteres especiales.",
    },
  ];

  const handleSubmit = (data) => {
    console.log("Datos enviados:", data);
  };

  return (
    <>
      <NavBar />
      <FormGeneric
        fields={fields}
        regexPatterns={regexPatterns}
        onSubmit={handleSubmit}
        buttonText="Registrar"
        className="custom-form"
        buttonClass="submit-button"
      />
      <Footer />
    </>
  );
}

export default ProductCreate;
