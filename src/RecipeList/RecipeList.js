
import React, { useState, useEffect } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/public/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Recipes not found');
        }
        return response.json();
      })
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="RecipeList">
      <h2>Recipe List</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <p>{recipe.ingredients}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes available.</p>
      )}
    </div>
  );
}

export default RecipeList;
