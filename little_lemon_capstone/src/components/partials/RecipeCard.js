import React from 'react';

function RecipeCard ({ recipe }) {
    return (
        <div className="recipe_card">
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <p>Order a delivery</p>
        </div>
    )
}

export default RecipeCard;