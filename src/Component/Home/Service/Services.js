import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';


const Service = ({service}) => {
    console.log('from database', service)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { name, price, productIMG, _id, details } = service;
    const bookService = () => {
        history.push(`/booking/${_id}`);
    }
    return (
        <div className="col-md-3">
            <div className="">
                <div className="card border-outline-info border-rounded text-fluid d-block" style={{"minHeight":"35rem", }}>
                    <img src={productIMG} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h5 className=" ms-auto">Service Charge: ৳{price}</h5>
                        <p className="card-text"></p>
                        <p>{details}</p>
                        <a onClick={bookService} class="btn btn-outline-primary">But Now</a>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Service;