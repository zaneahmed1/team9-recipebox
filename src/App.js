import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe App</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/recipes">Recipes</a>
            <a href="/add-recipe">Add Recipe</a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<RecipeList />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;