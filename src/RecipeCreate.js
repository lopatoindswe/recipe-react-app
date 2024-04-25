import React, { useState } from 'react';

function RecipeCreate({createRecipe}) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const initialRecipeFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  };

  const [formData, setFormData] = useState({ ...initialRecipeFormState });

  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    //console.log('post created', formData.type, formData.content);

    // Reset formData to initial state
    setFormData({ ...initialRecipeFormState });
    // console.log(
    //   'form data reset',
    //   initialPostFormState.type,
    //   initialPostFormState.content
    // );

    // Reset the form fields
    event.currentTarget.reset();
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
          <td>
              <input
                id="name"
                name="name"
                required={true}
                rows={1}
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                required={true}
                rows={1}
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                required={true}
                rows={1}
                type="url"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                rows={3}
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingridients"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                rows={3}
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparations"
              />
            </td>
            <td>
              <button type="submit" >Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
