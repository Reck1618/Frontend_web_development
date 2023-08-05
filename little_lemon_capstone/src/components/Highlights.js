import React from 'react';
import RecipeCard from './partials/scripts/RecipeCard';
import LemonDessert from '../assets/lemonDessert.jpg';
import Bruchetta from '../assets/bruchetta.svg';
import GreekSalad from '../assets/greekSalad.jpg';

const recipes = [
    {
        id: 1,
        name: "Greek Salad",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl.",
        image: GreekSalad,
        price: "$12.99"
    },
    {
        id: 2,
        name: "Bcuchetta",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl.",
        image: Bruchetta,
        price: "$5.99"
    },
    {
        id: 3,
        name: "Lemon Dessert",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl.",
        image: LemonDessert,
        price: "$10.99"
    }
  ];



function Highlights () {
    return (
        <section id="highlights">
            <div id="highlights_top-row">
                <div className="highlights_heading">
                    <h1>This weeks specials</h1>
                </div>
                <div className="highlights_button">
                    <a href="/menu" className="button">Online Menu</a>
                </div>
            </div>

            <div id="highlights_cards">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

        </section>
    )
}

export default Highlights;