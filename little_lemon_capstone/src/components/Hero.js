import React from 'react';
import hero_image from '../assets/hero.jpg';


function Hero () {
    return (
        <section id="hero">
            <div id="hero_content">
                <div className="hero_content-details">
                    <h1>Little Lemon</h1>
                    <h5>Chicago</h5>
                    <p>We are a family owned Mediterranean restaurant, located on maldove street in<br/> Chicago, illilonis. We focus on traditional recipes served with a mordern twist.</p>
                </div>

                <div className="hero_content-button">
                    <a href="/reservation" className="button">Reserve a Table</a>
                </div>
            </div>

            <div id="hero_content-img">
                <img src={hero_image} alt="resturant-food"/>
            </div>
        </section>
    )
}

export default Hero;
