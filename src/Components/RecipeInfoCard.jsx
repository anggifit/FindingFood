import React from 'react'

const RecipeInfoCard = ({mealImage, mealTitle, dietLabels, protein, carb, fat, energy, mealURL}) => {
  return (
    <div>
        <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-lime-300 bg-clip-border font-bold text-stone-400 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
                src={mealImage}
                alt=""
                className="h-full w-full object-cover"
            />
            </div>
            <div className="p-6">
            <h6 className="mb-4 block text-base text-left font-bold uppercase leading-relaxed tracking-normal text-lime-900 antialiased">
                {dietLabels} 
            </h6>
            <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {mealTitle}
            </h4>
            <p className="mb-8 pl-6 block text-base font-normal text-left leading-relaxed text-gray-700 antialiased">
                Protein (g) {protein} 
                <br/>
                Carb (g) {carb}
                <br/>
                Fat (g) {fat} 
                <br/>
                <strong>Kcal (per 100g) {energy} </strong>              
            </p>
            <a className="flex" href={mealURL}>
                <div className="text-left">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-md font-bold text-lime-900 transition-all hover:bg-stone-300/40 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                    Recipe
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                    </svg>
                    </button>
                </div>
            </a>
            </div>
        </div>
        <link
            rel="stylesheet"
            href=""
        />
        </div>
    </div>
  )
}

export default RecipeInfoCard
