import React, { useState } from 'react';
import './AddRecipe.css';

function AddRecipe() {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newRecipe = {
    //   name,
    //   ingredients,
    //   vegan,
    //   vegetarian,
    //   glutenFree,
    //   photoUrl
    // };


    setName('');
    setIngredients('');
    setVegan(false);
    setVegetarian(false);
    setGlutenFree(false);
    setPhotoUrl(null);
    setMessage('Recipe added!');
  };

  return (
    <div className="AddRecipe">
      <h2>Add a New Recipe</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="vegan">Vegan:</label>
          <input
            id="vegan"
            type="checkbox"
            checked={vegan}
            onChange={(e) => setVegan(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="vegetarian">Vegetarian:</label>
          <input
            id="vegetarian"
            type="checkbox"
            checked={vegetarian}
            onChange={(e) => setVegetarian(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="glutenFree">Gluten-Free:</label>
          <input
            id="glutenFree"
            type="checkbox"
            checked={glutenFree}
            onChange={(e) => setGlutenFree(e.target.checked)}
          />
        </div>
        <div>
          <label htmlFor="photoUrl">Image URL:</label>
          <input
            id="photoUrl"
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;