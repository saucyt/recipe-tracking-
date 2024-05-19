import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  const [formData, setFormData]= useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  })
  
  // event handler: form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    // extracts form data from state
    const {name, cuisine, photo, ingredients, preparation} = formData
    
    // creates new recipe 
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation
    }
    
    console.log('New Recipe:', newRecipe)
    addRecipe(newRecipe)
    
    // clears form after submission
    setFormData({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: ''
    })
    console.log("Cleared form data")
  }
  // input change event handler 
  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  
  return (
    <form name="create">
      <table>
        <tbody>
          
          <tr>
            <td>
             <input type="text" id="name" name="name" placeholder="Name" required onChange={handleInputChange}></input>
            </td>
            <td>
              <input type="text" id="cuisine" name="cuisine" placeholder="Cuisine" required onChange={handleInputChange}></input>
            </td>
             <td>
               <input type="url" id="photo" name="photo" placeholder="URL" required onChange={handleInputChange}></input>
            </td>
             <td>
               <textarea id="ingredients" name="ingredients" placeholder="Ingredients"  onChange={handleInputChange}></textarea>
            </td>
             <td>
               <textarea id="preparation" name="preparation"  placeholder="Preparation"  onChange={handleInputChange} ></textarea>
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
