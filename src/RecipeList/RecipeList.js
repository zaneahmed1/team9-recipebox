
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
      {recipes.length === 0 ? (
        <p>No recipes available.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              {recipe.photoUrl && (
                <img
                src={recipe.photoUrl}
                alt={recipe.name}
                width="200"/>
              )}
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p>
                <strong>Dietary Preferences:</strong> 
                {recipe.vegan && ' Vegan'}
                {recipe.vegetarian && ' Vegetarian'}
                {recipe.glutenFree && ' Gluten-Free'}
                {!recipe.vegan && !recipe.vegetarian && !recipe.glutenFree && ' None'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
