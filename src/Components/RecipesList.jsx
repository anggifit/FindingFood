import React, { useEffect, useState } from 'react';
import axios from 'axios';


const RecipesList = ({searchTerm}) => {
  const recipesURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;

  const [recipeMeals, setRecipeMeals] = useState([]);

  useEffect(() => {
    axios.get(recipesURL)
      .then((response) => {
        const meals = response.data.meals 
        setRecipeMeals(meals)
      })
      .catch((error) => {
        console.error('Error al obtener las recetas:', error);
      });
  }, [searchTerm]);
  
  return (
    <div style={{ marginTop: '58px'}}>
        <h2 className='text-black text-center text-2xl pt-6'>
        Find your recipe
        </h2>
        {recipeMeals === null ? (
            <p>Loading...</p>
        ) : (
          recipeMeals.length === 0 ? (
            <p>No recipes found.</p>
          ) : (
              <ul className='text-black text-center'>
              {recipeMeals
                .filter((meal) => {
                  const mealDetails = `${meal.strMeal} ${meal.strInstructions}`.toLowerCase();
                  return mealDetails.includes(searchTerm.toLowerCase());
                }
                )
                .map(meal => (
                  <li key={meal.strMeal}>
                    <p>{meal.strMeal}</p>
                  </li>
              ))}
              </ul>
          ))}
    </div>
  );
}

export default RecipesList;
