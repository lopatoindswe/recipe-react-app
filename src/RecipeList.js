import React from 'react';
import RecepiView from './RecipeView';

function RecipeList({ RecipeData, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div>
      <table>
        <thead className="recipe-list">
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingridients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {RecipeData && RecipeData.length > 0 && (
            <>
              {RecipeData.map((recipe, index) => (
                <RecepiView
                  key={index}
                  recipe={recipe}
                  deletePost={() => deleteRecipe(index)}
                />
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
