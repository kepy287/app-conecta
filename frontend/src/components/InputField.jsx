import React from 'react';
import './InputField.module.css'; // Importamos el archivo de estilos (opcional)

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="input-field-container">
      <label htmlFor={placeholder}>{label}</label>
      <input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;