import React, { useEffect, useState } from 'react';
import axios from 'axios';

const recipesURL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const RecipesList = () => {
  const [recipeCategory, setRecipeCategory] = useState(null);

  useEffect(() => {
    axios.get(recipesURL)
      .then((response) => {
        const categories = response.data.categories
        setRecipeCategory(categories)
      })
      .catch((error) => {
        console.error('Error al obtener las recetas:', error);
      });
  }, []);

  return (
    <div style={{ marginTop: '58px'}}>
        <h2 className='text-black text-center text-2xl pt-6'>
        Find your recipe
        </h2>
        {recipeCategory === null ? (
            <p>Loading...</p>
        ) : (
            <ul className='text-black text-center'>
            {recipeCategory.map(category => (
                <li key={category.idCategory}>
                <p>{category.strCategory}</p>
                </li>
            ))}
            </ul>
        )}
    </div>
  );
}

export default RecipesList;
