import React from 'react';
import Restaurant_img from '../assets/restaurant.jpg';
import Restaurant_chef from '../assets/restaurantChef.jpg';


function About () {
    return (
        <section id="about">
            <div className="about_content">
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p>Little Lemon opened in 1995 by two italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavours of their hometown in italy to the people of Chicago. The two brothers continue to oversee the Little Lemon resturant, nearly thirty years later.</p>
            </div>

            <div className="about_content-img">
                <img className="img1" src={Restaurant_img} height={400} width={300}/>
                <img className="img2" src={Restaurant_chef} height={400} width={300}/>
            </div>
        </section>
    )
}

export default About;
