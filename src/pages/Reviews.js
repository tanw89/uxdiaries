import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import ReviewsContainer from '../components/ReviewsContainer'
export const Reviews = () => {
    return (
        <>

            <Hero hero="reviewsHero">
                <Banner title="App Reviews">
                    <Link to="/" className="btn-primary">Return Home</Link>
                </Banner>
            </Hero>
            <ReviewsContainer /> 
        </>
    );
};

export default Reviews;