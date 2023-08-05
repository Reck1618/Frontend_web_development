import React from 'react';
import Restaurant_img from '../assets/restaurant.jpg';
import Restaurant_chef from '../assets/restaurantChef.jpg';


function About () {
    return (
        <section id="about">
            <div className="about_content">
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>

            <div className="about_content-img">
                <img src={Restaurant_img} height={400} width={300}/>
                <img src={Restaurant_chef} height={400} width={300}/>
            </div>
        </section>
    )
}

export default About;
