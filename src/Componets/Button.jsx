// src/Button.jsx

import React from 'react';

// Define el componente funcional Button
// Recibe dos props:
//   - children: El contenido que se mostrará dentro del botón (el texto, por ejemplo).
//   - onClick: Una función que se ejecutará cuando el botón sea clickeado.
const Button = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;