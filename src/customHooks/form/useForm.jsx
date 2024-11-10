import { useState } from "react";

const useForm = (fields, onSubmit, regexPatterns = []) => {
  // Inicializamos formData con los campos definidos en fields
  const [formData, setFormData] = useState(
    fields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.defaultValue || "" }),
      {}
    )
  );
  const [errors, setErrors] = useState({});
 

  // Función de validación de un campo específico
  const validateField = (id, value) => {
    const pattern = regexPatterns.find((rule) => rule.field === id);
    let error = "";

    if (pattern && value.length > 0) {
      error = pattern.regex.test(value) ? "" : pattern.msg;
    }

    // Actualizamos solo el error del campo específico
    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
    return !error; // Retorna si hay error o no
  };

  // Manejo del cambio en los campos
  const handleChange = (e) => {
    const { id, type, checked, value } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    // Actualizamos el valor del campo en formData
    setFormData((prevData) => ({
      ...prevData,
      [id]: newValue,
    }));

    // Validamos el campo en el cambio
    validateField(id, newValue);
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    fields.forEach((field) => {
      if (!validateField(field.id, formData[field.id])) {
        validationErrors[field.id] = true;
      }
    });

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
      // Resetea el formulario después del envío
      setFormData(
        fields.reduce(
          (acc, field) => ({ ...acc, [field.id]: field.defaultValue || "" }),
          {}
        )
      );
      setErrors({});
     
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
