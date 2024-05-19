import React,{useState} from "react";

function RecipeList({ recipes, deleteRecipe }) {
  function RecipeRow({ recipe }) {
    console.log("recipe:",recipe)
    return (
      <tr key={recipe.id}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt="" style={{ maxWidth: '100px' }} />
        </td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </td>
      </tr>
    );
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map(recipe => (
            <RecipeRow key={recipe.id} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
