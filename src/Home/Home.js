import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
    <div className="button-container">
    <Link to="/recipes">
      <button className="nav-button">Go to Recipe List</button>
    </Link>
    <Link to="/add-recipe">
      <button className="nav-button">Add New Recipe</button>
    </Link>
  </div>
  <h2>Recipe Box</h2>
<p>Welcome to Recipe Box, an app that helps you store and manage your favorite recipes, with a focus on accommodating dietary restrictions and allergies.</p>

    </div>
  );
}

export default Home;
