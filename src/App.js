import React, { useState } from 'react';
import './App.css';
import RecipeCreate from './RecipeCreate';
import RecipeList from './RecipeList';
import RecipeData from './RecipeData';

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => {
    setRecipes((recipes) => [...recipes, newRecipe]);
  };

  console.log(recipes);

  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1 style={{fontFamily: 'Playfair Display SC', fontSize: 64, textAlign: 'center'}}>Delicious Food Recipes</h1>
      </header>
      <RecipeList RecipeData={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
