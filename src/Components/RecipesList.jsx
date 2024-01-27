import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import RecipeInfoCard from './RecipeInfoCard'
import Loading from './Loading';
import.meta.env.VITE_EDAMAM_API_KEY

const RecipesList = ({searchTerm}) => {
  const edamamAPIURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${import.meta.env.VITE_EDAMAM_API_ID}&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}`;

  const [recipeMeals, setRecipeMeals] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const roundNutrient = (num) => Math.round(num)

  useEffect(() => {
    axios.get(edamamAPIURL)
      .then((response) => {
        const mealsByIng = response.data.hits.map(hit => hit.recipe)
        setRecipeMeals(mealsByIng)
      })
      .catch((error) => {
        console.error('Error al obtener los ingredientes:', error);
      });
  }, [searchTerm, edamamAPIURL]);

  return (
    <div style={{ marginTop: '58px'}}>
        {recipeMeals === null ? (
            <Loading/>
        ) : (
          recipeMeals.length === 0 ? (
            <p className='text-lime-900 text-2xl font-bold'>No recipes yet.</p>
          ) : (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {recipeMeals.map(recipe => (
                    <RecipeCard
                      key={recipe.uri}
                      mealImg={recipe.image}
                      mealTitle={recipe.label}
                      onClick={() => setSelectedRecipe(recipe)}
                    />
                    ))}        
                </div>
            </section>
          ))}

          {selectedRecipe && (
            <div 
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center"
              onClick={() => setSelectedRecipe(null)}
            >
                <RecipeInfoCard
                  mealImage={selectedRecipe.image}
                  mealTitle={selectedRecipe.label}
                  dietLabels={selectedRecipe.dietLabels}
                  protein={roundNutrient(selectedRecipe.totalNutrients.PROCNT.quantity)}
                  carb={roundNutrient(selectedRecipe.totalNutrients.CHOCDF.quantity)}
                  fat={roundNutrient(selectedRecipe.totalNutrients.FAT.quantity)}
                  energy={roundNutrient(selectedRecipe.totalNutrients.ENERC_KCAL.quantity)}
                  mealURL={selectedRecipe.url}
                />
            </div>
          )}
    </div>
  );
}

export default RecipesList;

