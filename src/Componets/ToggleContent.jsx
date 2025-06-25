// src/componets/ToggleContent.jsx
import React, { useState } from 'react'; // No olvides importar useState

const ToggleContent = () => {
  // 1. Define un estado booleano para controlar la visibilidad.
  //    Por ejemplo: const [isVisible, setIsVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // 2. Crea una función para manejar el clic del botón que invierta el estado.
  //    Por ejemplo: const handleToggle = () => setIsVisible(!isVisible);
  const handleToggle=()=>setIsVisible(!isVisible)

  return (
    <div>
      {/* 3. Renderiza un botón. Dale un texto claro como "Mostrar/Ocultar" */}
      {/* 4. Asocia la función handleToggle al evento onClick del botón. */}
    <button onClick={handleToggle}>Mostrar/ocultar</button>
      {/* 5. Renderiza condicionalmente el contenido (un div o un párrafo con texto) */}
      {isVisible && <div>Este es el contenido ocultable</div>} 
      {/* Solo debe mostrarse si isVisible es true. */}
      {/* Por ejemplo: {isVisible && <div>Este es el contenido ocultable</div>} */}
    </div>
  );
};

export default ToggleContent;