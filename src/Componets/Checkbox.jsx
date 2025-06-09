// src/componets/Checkbox.jsx
import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div>
      {/* Tu código para el label y el input de tipo checkbox aquí */}
      {/* El input debe tener type="checkbox", checked={checked} y onChange={onChange} */}
      <div>
        <label>
            {label}
        <input type="checkbox"  checked={checked} onChange={onChange}/>
        
        </label>
      {/* Tu código para el label y el input aquí */}
    </div>
    </div>
  );
};

export default Checkbox;