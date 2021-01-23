//This is the rectangular button for each review.

import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import defaultImg from '../images/skills.jpeg'

export default function Review({review}) {
    const{name, slug, images} = review;
    console.log(review);

    return <article className="review">
        <div className="img-container">
            <img src={images[0] || defaultImg} alt = "Reviews"/>
            <div className="price-top">
                <h6>{name}</h6>
            </div>
            <Link to={`/reviews/${slug}`} className="btn-primary review-link">
                {name}
            </Link>
        </div>
    </article>;
}

Review.propTypes = {
    review: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
}
