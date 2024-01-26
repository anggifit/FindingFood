import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import Loading from './Loading';


const RecipesList = ({searchTerm}) => {
  const recipesByIngredientURL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}` 

  const [recipeMeals, setRecipeMeals] = useState([]);

  useEffect(() => {
    axios.get(recipesByIngredientURL)
      .then((response) => {
        const mealsByIng = response.data.meals 
        setRecipeMeals(mealsByIng)
      })
      .catch((error) => {
        console.error('Error al obtener los ingredientes:', error);
      });
  }, [searchTerm, recipesByIngredientURL]);

  return (
    <div style={{ marginTop: '58px'}}>
        {recipeMeals === null ? (
            <Loading/>
        ) : (
          recipeMeals.length === 0 ? (
            <p>No recipes found.</p>
          ) : (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
                <div className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {recipeMeals.map(meal => (
                      <RecipeCard
                        key={meal.idMeal}
                        mealImg={meal.strMealThumb}
                        mealTitle={meal.strMeal}
                      />
                    ))}        
                </div>
            </section>
          ))}
    </div>
  );
}

export default RecipesList;

