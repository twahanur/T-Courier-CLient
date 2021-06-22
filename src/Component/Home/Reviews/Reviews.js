import React, { useEffect, useState } from 'react';
import ReviewBox from './ReviewBox'
import './Review.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pacific-citadel-04482.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    },
    )
    return (
<div style={{background:'lightGray'}}>
            <div className="mt-5 pt-5 pb-5" >
                <div className="Box">
                    <h1 className="text-center ColorText pb-5 fs-1">Testimonials</h1>
                    <div className="d-flex">{
                        reviews.map(review => <ReviewBox  key={review._id} review={review}></ReviewBox>)
                    }</div>
                </div>
            </div></div>
    );
};

export default Reviews;