import React, { Component } from 'react'
import {ReviewContext} from '../context'
import Loading from './Loading';
import Review from './Review'
import Title from './Title'

export default class Featured extends Component {
    static contextType = ReviewContext
    render() {
    let {loading, featuredReviews: reviews} = this.context
    reviews = reviews.map(review=>{
        return <Review key ={review.id} review={review}/>

    })
    
    
    
    return (
    <section className="featured-reviews">
        <Title title = "Featured Reviews"/>
        <div className="featured-reviews-center">
        {loading?<Loading/>:reviews} 
        </div>
    </section>
    );
    }
}
