import React, { Component } from 'react'
import Client from './Contentful'

const ReviewContext = React.createContext()

export default class ReviewProvider extends Component {
    //Use class because we want to create states. Allows delivery of more complex component rather than just text 
    state = {
        review: [],
        sortedReviews: [],//This operates the selectors in the site. One selector can be found in the reviews page, where after clicking on the type of reviews, only the correct ones get displayed
        featuredReviews: [],//The other selector is whether that review is featured or not. If it is, it will appear in the main page. This is controlled by whether the object attribute in data.js for featured === true
        loading: true,//Ensures loading bar always comes out before component is mounted
    }

    //get data
getData = async ()=>{try {
    let response = await Client.getEntries({
        content_type: "reviews",
        order: "sys.createdAt"
    })

    let reviews = this.formatData(response.items)
        let featuredReviews = reviews.filter(review => review.featured === true);
        this.setState({
            reviews,
            featuredReviews,
            sortedReviews: reviews,
            loading: false,
        });

} catch (error) {
    console.log(error)
}}

    componentDidMount() {
        this.getData()
    }

    //note to self: variable is defined within each function. What I call it within one function doesn't affect another, unless I use a "this.". But rmb to standardise for convenience sake.
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url);

            let review = { ...item.fields, images, id };
            return review;
        });
        return tempItems
    }

    filterReviews = () => {
        let { reviews, type } = this.state
        let tempReviews = [...reviews];
        if (type !== 'all') {
            tempReviews = tempReviews.filter(review => review.type === type)
        }
        this.setState({
            sortedReviews: tempReviews
        })
    };

    getReview = (slug) => {
        let tempReviews = [...this.state.reviews];
        const review = tempReviews.find(review => review.slug === slug);
        return review;
    };

    handleChange = event => {
        const target = event.target
        const value = event.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterReviews)
    }

    render() {
        return <ReviewContext.Provider value={{ ...this.state, getReview: this.getReview, handleChange: this.handleChange }}>
            {this.props.children}
        </ReviewContext.Provider> // rmb to put this.props.children so that whichever component we apply this class to, it applies to the children as well
    }//getReview: this.getReview was passed into the context so that this function is available later
}

const ReviewConsumer = ReviewContext.Consumer;

export function withReviewConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <ReviewConsumer>
            {value => <Component {...props} context={value} />}
        </ReviewConsumer>
    }
}

export { ReviewProvider, ReviewConsumer, ReviewContext };
