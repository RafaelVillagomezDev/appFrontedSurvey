import { useState } from 'react';

const useForm = (fields, onSubmit, regexPatterns = []) => {
    // Inicializamos formData con los campos definidos en fields
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue || '' }), {})
    );
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    // Función de validación de un campo específico
    const validateField = (name, value) => {
        const pattern = regexPatterns.find(rule => rule.field === name);
        let error = '';

        if (pattern && value.length > 0) {
            error = pattern.regex.test(value) ? '' : pattern.msg;
        }

        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
        return !error;
    };

    // Manejo del cambio en los campos
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });

        // Validamos el campo en el cambio
        if (errors[name]) {
            validateField(name, newValue);
        }

        const isValid = fields.every(field => validateField(field.name, formData[field.name] || newValue));
        setIsFormValid(isValid);
    };

    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};
        fields.forEach((field) => {
            if (!validateField(field.name, formData[field.name])) {
                validationErrors[field.name] = true;
            }
        });

        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData);
            // Resetea el formulario después del envío
            setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: field.defaultValue || '' }), {}));
            setErrors({});
        }
    };

    return {
        formData,
        errors,
        isFormValid,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
