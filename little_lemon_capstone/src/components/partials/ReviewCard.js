import React from 'react';


function ReviewCard ({ review }) {
    return (
        <div className="review_card">
            <h3>{review.stars} <span>{review.rating}</span> </h3>
            <div className="review_card-content">
                <img src={review.image} alt={review.name} height="50" width="50"/>
                <h3>{review.name}</h3>
            </div>
            <p>{review.review}</p>
        </div>
    )
}

export default ReviewCard;