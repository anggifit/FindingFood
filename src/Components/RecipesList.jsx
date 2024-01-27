import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import Loading from './Loading';
import.meta.env.VITE_EDAMAM_API_KEY

const RecipesList = ({searchTerm}) => {
  const edamamAPIURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${import.meta.env.VITE_EDAMAM_API_ID}&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}`;

  //const recipesByIngredientURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}` 

  const [recipeMeals, setRecipeMeals] = useState([]);

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
            <p>No recipes yet.</p>
          ) : (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {recipeMeals.map(recipe => (
                      <RecipeCard
                        key={recipe.uri}
                        mealImg={recipe.image}
                        mealTitle={recipe.label}
                      />
                    ))}        
                </div>
            </section>
          ))}
    </div>
  );
}

export default RecipesList;

