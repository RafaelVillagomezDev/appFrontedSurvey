import React, { useState } from "react";
import useForm from "../../customHooks/form/useForm";



function FormGeneric({
  fields,
  onSubmit,
  buttonText = "Enviar",
  className = "",
  buttonClass = "",
  regexPatterns = [], // Agregamos regexPatterns
}) {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isFormValid,
  } = useForm(fields, onSubmit, regexPatterns);

  const renderField = ({ name, type = 'text', options = [], placeholder, label, className = '', events = {}, maxLength }) => {
    const fieldError = errors[name] ? 'input-error' : '';

    switch (type) {
      case 'select':
        return (
          <select
            id={name}
            name={name}
            value={formData[name] || ''}
            onChange={handleChange}
            className={`${className} ${fieldError}`.trim()}
            {...events} // Pasamos los eventos personalizados
          >
            <option value="">Selecciona una opción</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            value={formData[name] || ''}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${className} ${fieldError}`.trim()}
            maxLength={maxLength} // Establecemos el maxLength
            {...events} // Pasamos los eventos personalizados
          />
        );
      case 'checkbox':
        return (
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={formData[name] || false}
            onChange={handleChange}
            className={className}
            {...events} // Pasamos los eventos personalizados
          />
        );
      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name] || ''}
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
    <div>
      <form onSubmit={handleSubmit} className={className}>
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            {renderField(field)}
            {errors[field.name] && (
              <p className="error">{errors[field.name]}</p>
            )}
          </div>
        ))}
        <button type="submit" className={buttonClass} disabled={!isFormValid}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}




export default FormGeneric;
