import React, { Component } from 'react'
import defaultBcg from '../images/skills.jpeg'

import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { ReviewContext } from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }

    static contextType = ReviewContext;

    render() {
        const { getReview } = this.context;
        const review = getReview(this.state.slug)
        if (!review) {
            return <div className="error">
                <h3>No such review found</h3>
                <Link to='/reviews' className="btn-primary">
                    Back to Reviews
                </Link>
            </div>
        }

        const { name, psgoal, jtbd, improvements, images } = review;
        const [mainImg, ...otherImg] = images
        console.log(mainImg);
        console.log(otherImg);

        return (
            <>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name}`}>
                        <Link to='/reviews' className="btn-primary"> Back to Reviews</Link>
                    </Banner>
                </StyledHero>
                <section className="single-review">
                    <div className="single-review-images">
                        {otherImg.map((item, index) => (
                            <img key={index} src={item} alt={name} />
                        ))}
                    </div>
                                        
                    <div className="single-review-info">
                    
                    <article className="desc">
                        <h3>Jobs to be done</h3>
                        <h6>What are the possible user groups, and why will they use the app?</h6>
                        <p>{jtbd}</p>
                        <br></br>
                        <h3>Public sector goals</h3>
                        <h6>What are ideal outcomes for the public sector in this domain?</h6>
                        <p>{psgoal}</p>
                    </article>
                    
                    <article className="desc">
                    <h3>Possible Features to Add/Tweaks to Make</h3>
                    <h6>How can we tap on behaviour science to improve this app?</h6>
                    <p>{improvements}</p>
                    </article>
                    </div>
                </section>
            </>
        );
    }
}
