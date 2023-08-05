import React from 'react';
import ReviewCard from './partials/scripts/ReviewCard';
import Adam_img from '../assets/adam';
import Ella_img from '../assets/ella';
import Chang_img from '../assets/chang';
import Maria_img from '../assets/maria';

const reviews = [
    {
        id: 1,
        name: "Adam",
        stars: "★★★★★",
        rating: "5/5",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl.",
        image: Adam_img
    },
    {
        id: 2,
        name: "Ella",
        stars: "★★★★",
        rating: "4/5",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl.",
        image: Ella_img
    },
    {
        id: 3,
        name: "Chang",
        stars: "★★★★★",
        rating: "5/5",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl.",
        image: Chang_img
    },
    {
        id: 4,
        name: "Maria",
        stars: "★★★★★",
        rating: "5/5",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae tincidunt nisl.",
        image: Maria_img
    },
]

function Testimonials () {
    return (
        <section id="testimonials">
            <h1>Testimonials</h1>
            <div id="testimonials_cards">
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}
            </div>
        </section>
    )
}

export default Testimonials;