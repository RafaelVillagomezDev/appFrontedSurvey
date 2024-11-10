import React from "react";
import useForm from "../../customHooks/form/useForm";
import { memo } from 'react';

function FormGeneric({
  fields,
  onSubmit,
  buttonText = "Enviar",
  className = "",
  classDiv = "",
  id = "",
  buttonClass = "",
  loading = "",
  loadingComponent = "",
  regexPatterns = [], // Agregamos regexPatterns
}) {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    fields,
    onSubmit,
    regexPatterns
  );

  const renderField = ({
    id, // Cambiamos name por id
    type = "text",
    options = [],
    placeholder,
    label,
    className = "",
    events = {},
    maxLength,
    loading = "",
    loadingComponent = "",
  }) => {
    const fieldError = errors[id] ? "input-error" : ""; // Usamos id para verificar errores

    switch (type) {
      case "select":
        return (
          <select
            id={id}
            name={id} // Mantenemos name para el input
            value={formData[id] || ""}
            onChange={handleChange}
            className={`${className} ${fieldError}`.trim()}
            {...events} // Pasamos los eventos personalizados
          >
            <option value="">Selecciona una opción</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            id={id}
            name={id} // Mantenemos name para el input
            value={formData[id] || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${className} ${fieldError}`.trim()}
            maxLength={maxLength} // Establecemos el maxLength
            {...events} // Pasamos los eventos personalizados
          />
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            id={id}
            name={id} // Mantenemos name para el input
            checked={formData[id] || false}
            onChange={handleChange}
            className={className}
            {...events} // Pasamos los eventos personalizados
          />
        );
      case "text":
        return (
          <input
            type={type}
            id={id}
            name={id} // Mantenemos name para el input
            value={formData[id] || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${className} ${fieldError}`.trim()}
            maxLength={maxLength} // Establecemos el maxLength
            {...events} // Pasamos los eventos personalizados
          />
        );
      default:
        return (
          <input
            type={type}
            id={id}
            name={id} // Mantenemos name para el input
            value={formData[id] || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${className} ${fieldError}`.trim()}
            maxLength={maxLength} // Establecemos el maxLength
            {...events} // Pasamos los eventos personalizados
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className} id={id}>
      {fields.map((field) => (
        <div key={field.id} className={classDiv}>
          {field.label?
            <label htmlFor={field.id}>{field.label}</label>:<></>
          }
          {renderField(field)} {/* Pasamos el campo completo */}
          <div className="error_container">
            {errors[field.id] && ( // Verificamos errores usando id
              <p className="error">{errors[field.id]}</p>
            )}
          </div>
        </div>
      ))}
      <button type="submit" className={buttonClass}>
        {loading ? loadingComponent : buttonText}
      </button>
    </form>
  );
}

export default memo(FormGeneric);
