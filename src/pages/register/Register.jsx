import React, { lazy } from "react";

const FormRegister = lazy(() =>
  import("../../components/formRegister/FormRegister")
);
const Footer = lazy(() => import("../../components/footer/Footer"));

import("styles/pages/_register.scss").then(() => {
  console.log("Reset styles loaded");
});

function Register() {
  return (
    <>
      <div id="container_main">
        <FormRegister />
        <Footer />
      </div>
    </>
  );
}

export default Register;
