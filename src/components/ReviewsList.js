import React from 'react';
import Review from './Review'

export default function ReviewsList({reviews}) {
if (reviews.length===0){
    return (
        <div className="empty-search">
            <h3> unfortunately no reviews matched your search parameter</h3>
        </div>
    )
}
return <section className="reviewsList">
    <div className="reviewslist-center">
        {
            reviews.map(item=>{
                return <Review key={item.id} review={item}/>
            })
        }
    </div>

</section>;
}
