import React from 'react';

function RecipeCard ({ recipe }) {
    return (
        <div className="recipe_card">
            <img src={recipe.image} alt={recipe.name} height="150" width="220"/>
            <div className='recipe_card-heading'>
                <h3>{recipe.name}</h3>
                <h3>{recipe.price}</h3>
            </div>
            <p>{recipe.description}</p>

            <a href="#" className='button'>Order for delivery</a>
        </div>
    )
}

export default RecipeCard;