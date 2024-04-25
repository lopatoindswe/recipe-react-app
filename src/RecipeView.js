import React from 'react';

function RecipeView({ recipe, deletePost }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img
          src={recipe.photo}
          alt="Recipe Photo"
          style={{ height: '100%', width: '100%', objectFit: 'scale-down' }}
        ></img>
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deletePost}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
