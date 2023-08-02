import React from 'react';
import RecipeCard from './partials/RecipeCard';

const recipes = [
    {
      id: 1,
      name: "Delicious Pasta",
      description: "A tasty pasta dish with marinara sauce.",
      image: "url_to_image_1.jpg",
    },
    {
      id: 2,
      name: "Yummy Pizza",
      description: "A classic pizza with your favorite toppings.",
      image: "url_to_image_2.jpg",
    },
    // Add more recipes as needed
  ];



function Highlights () {
    return (
        <section id="highlights">
            <div id="highlights_top-row">
                <div className="heighlight_heading">
                    <h1>Specials</h1>
                </div>
                <div className="heighlight_button">
                    <a href="/menu">Online Menu</a>
                </div>
            </div>

            <div id="heighlights_cards">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

        </section>
    )
}

export default Highlights;