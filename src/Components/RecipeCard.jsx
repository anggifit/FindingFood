import React from 'react';

const RecipeCard = ({mealImg, mealTitle, onClick}) => {
    return (
        <div 
            className="relative w-full h-64 cursor-pointer bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out" 
            style={{backgroundImage: `url(${mealImg})`}}
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:opacity-40 transition duration-300 ease-in-out"></div>
            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                <a className="text-white text-2xl font-bold text-center" href="#">
                <span className="absolute inset-0"></span>
                    {mealTitle}
                </a>
                </h3>
            </div>
        </div>

    );
};

export default RecipeCard;
