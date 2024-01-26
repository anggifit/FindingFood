import React from 'react'
import SearchBar from './SearchBar'
import RecipesList from './RecipesList'

const Header = ({setSearchTerm, searchTerm}) => {
    return (
        <div>
            <section    
                className="bg-cover bg-center h-screen"
                style={{ backgroundImage: `url('./src/assets/bg-img.jpg')`}}
            >
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 
                        className="mb-4 text-7xl font-bold text-lime-900 md:text-5xl lg:text-6xl"
                        style={{lineHeight: 1.5}}
                    >
                    CRAFTING HEALTH, <br/> 
                    One Recipe at a Time    
                    </h1>
                    <p className="mb-8 text-[22px] font-normal text-black lg:text-xl sm:px-16 lg:px-48">
                        Explore healthy recipes curated for your well-being. <br/>
                        A delightful taste of wellness.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <SearchBar setSearchTerm={setSearchTerm}/>
                    </div>
                    <RecipesList searchTerm={searchTerm} />
                </div>
            </section>
        </div>
    )
}

export default Header
