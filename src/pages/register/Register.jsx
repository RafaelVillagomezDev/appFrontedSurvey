import React, { lazy } from "react";

const FormRegister = lazy(() =>
  import("../../components/formRegister/FormRegister")
);
const FormRegisterCompany = lazy(() =>
  import("../../components/formRegister/FormRegisterCompany")
);
const Footer = lazy(() => import("../../components/footer/Footer"));

import("styles/pages/_register.scss").then(() => {
  console.log("Register styles loaded");
});

function Register({company}) {
  return (
    <>
      <div id="container_main">
        {
          company ? <FormRegisterCompany/> : <FormRegister />
        }
        
        <Footer />
      </div>
    </>
  );
}

export default Register;
