// src/componets/TextInput.jsx
import React from 'react';

const TextInput = ({ label, value, onChange }) => {
  // ¿Cómo asociarías el label con el input de forma accesible?
  // Pista: el atributo 'htmlFor' en <label> y el atributo 'id' en <input>
  // Necesitas generar un ID único para el input si usas htmlFor.
  // Una forma simple para este ejercicio es usar una prop `id` o un valor estático para el `id` si solo hay un input.
  // Para pruebas, `getByLabelText` funciona muy bien incluso sin un `id` explícito si el input está anidado dentro del label.

  return (
    <div>
        <label>
            {label}
        <input type="text"  value={value} onChange={onChange}/>
        
        </label>
      {/* Tu código para el label y el input aquí */}
    </div>
  );
};

export default TextInput;