import React from 'react';
import food_image from '../assets/restauranfood.jpg';


function Hero () {
    return (
        <section id="hero">
            <div id="hero_content">
                <div className="hero_content-details">
                    <h1>Little Lemon</h1>
                    <h5>Chicago</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>

                <div className="hero_content-button">
                    <a href="/reservation">Reserve a Table</a>
                </div>
            </div>

            <div className="hero_content-img">
                <img src={food_image} alt="resturant-food" width="200" height="200"/>
            </div>
        </section>
    )
}

export default Hero;
