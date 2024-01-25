import React from 'react'
import FilterInput from './Filters/FilterInput'

const SearchBar = ({setSearchTerm}) => {

    const handleFilterChange = (e) =>{
        setSearchTerm(e.target.value)
    }

    return (
        <div>
            <div className="flex rounded-full bg-neutral-50 px-2 w-[1000px] max-w-[600px]">
                <FilterInput handleFilterChange={handleFilterChange}/>
                <button type="submit" className="relative p-2 bg-neutral-50 rounded-full ml-auto">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SearchBar
