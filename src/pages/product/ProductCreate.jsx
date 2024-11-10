import React, { lazy, useEffect } from "react";

const NavBarDefault = lazy(() => import("../../components/navBar/NavBarDefault"));
const FormGeneric = lazy(() =>
  import("../../components/formGeneric/FormGeneric")
);
const Footer = lazy(() => import("../../components/footer/Footer"));

import("styles/pages/_productCreate.scss")
  .then(() => {
    console.log("Product styles loaded");
  })
  .catch((error) => {
    console.error("Error loading product styles:", error);
  });

function ProductCreate() {
  const fields = [
    {
      name: "product",
      id: "producto1",
      label: "Producto",
      required: true,
      placeholder: "Ingresa un producto",
      maxLength: 9,
      className: "card_username",
    },
    {
      name: "product",
      id: "producto2",
      label: "Producto",
      required: true,
      maxLength: 9,
      placeholder: "Ingresa un producto",
      className: "card_username",
    },
  ];

  const regexPatterns = [
    {
      field: "producto1",
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
      <NavBarDefault/>
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
