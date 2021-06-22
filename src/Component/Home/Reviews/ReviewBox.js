
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const ReviewBox = ({ review }) => {
    // console.log(review)
    return (
        <div className="reviews">
            <div className="card ms-2 p-3">
                <div className="card-body">
                   <div className="d-flex justify-content-between">
                   <div className="CustomerImage">
                        <img src={review?.image} alt={review?.CustomerName} />
                    </div>
                    <div className="card-title me-0">
                        <h3 className="ColorText">{review?.CustomerName}</h3>
                        <span>{review?.company}</span>
                    </div>
                   </div>
                </div>
                <div className="card-text">
                    <p>{review?.description}</p>
                </div>
                <Box className="mt-2 card-muted" component="fieldset" borderColor="transparent">
                    <Rating name="read-only" value={review?.rating} readOnly />
                </Box>
            </div>

        </div>
    );
};

export default ReviewBox;