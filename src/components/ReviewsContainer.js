import React from 'react'
import ReviewsFilter from './ReviewsFilter'
import ReviewsList from './ReviewsList'
import { withReviewConsumer } from '../context'
import Loading from './Loading'

function ReviewContainer({ context }) {
    const { loading, sortedReviews, reviews } = context;
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <ReviewsFilter reviews={reviews} />
            <ReviewsList reviews={sortedReviews} />
        </>
        );
}

export default withReviewConsumer(ReviewContainer);

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//             const {loading, sortedRooms, rooms} = value
//             if (loading){
//                 return <Loading />
//             }
//                    return (
//                         <div>
//                             Hello from rooms container
//                             <RoomsFilter rooms = {rooms}/>
//                             <RoomsList rooms = {sortedRooms}/>
//                         </div>
//                     );
//                 }}
//         </RoomConsumer>
//     )
// }
