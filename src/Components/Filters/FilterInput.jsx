import React, { useState } from 'react';

const FilterInput = ({ handleFilterChange }) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleInputChange = (e) => {
    handleFilterChange(e);
    setIsInputActive(!!e.target.value); // Establecer isInputActive en true si hay texto, de lo contrario, false
  };

  return (
    <div className="flex items-center w-[1000px]">
      <input
        type="text"
        className={`w-full bg-[#0d1829] flex bg-transparent pl-2 text-${isInputActive ? 'black' : '[#cccccc]'} outline-0`}
        placeholder="Explore flavors with ingredient search..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default FilterInput;
