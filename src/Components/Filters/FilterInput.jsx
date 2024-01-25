import React from 'react'

const FilterInput = ({handleFilterChange}) => {
  return (
    <div className="flex items-center w-[1000px]">
      <input
        type="text"
        className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
        placeholder="What would you like to cook today?"
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default FilterInput
