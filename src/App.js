import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const recipeDataWithId = RecipeData.map((recipe,index)=>{
    recipe.id = index+1;
    return recipe;
  })
  const [recipes, setRecipes] = useState(recipeDataWithId);
  let maxId = RecipeData.length;
  
  // deltes recipe
  const deleteRecipe = (recipeId) => {
    setRecipes(recipes.filter(recipe => recipe.id !== recipeId))
    console.log("Deleted RecipeId:", recipeId)
  }
  
  // adds new recipe
  const addRecipe = (newRecipe) =>{
    maxId++;
    newRecipe.id = maxId;
    setRecipes([...recipes, newRecipe]);
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
