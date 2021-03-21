import React from 'react'

const MovieReviews = (props) => {
return (
    <ul className="review-list">
        {props.reviews.map(review => 
        <li className="review">{review.byline}</li>
        )}
    </ul>
)
}

export default MovieReviews;