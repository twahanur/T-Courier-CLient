import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PreLoader from '../../Common/PreLoader/PreLoader'
import DashboardMenu from '../DashboardMenu/DashboardMenu';

const BookedService = () => {
    document.title = 'Orders - Deshi-Trolly.Com';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [preLoad, setPreLoad] = useState(false);
    const [orders, setOrders] = useState([]);
    const { username, useremail, userpicture } = orders;
    console.log(loggedInUser,"user name")
    useEffect(() => {
        fetch('https://pacific-citadel-04482.herokuapp.com/orders?useremail=' + loggedInUser.useremail)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setPreLoad(true);
                console.log(data)
            }
            )
    }, []);
    const totalPrice = orders.reduce(
        (total, product) => total + Number(product.price),
        0
    );
    return (
        <div>
            <DashboardMenu/>
            <h2 className="text-brand text-center">Your Booked services</h2>
            {
                orders.length ?
                <div className="marginTopBottom">
                <div className="container">
                    <div className="URProfileInfo">
                        <p>Hello, {loggedInUser.username} Thank you for {orders.length ? 'shopping with us.' : 'choosing us.'}</p>
                        <div className="UserBox">
                            <div className="UserPP">
                                <img src={loggedInUser.userpicture} alt={loggedInUser.username} />
                            </div>
                            <div className="URName">
                                <h2>{loggedInUser.username}</h2>
                                <div className="URMail">
                                    Email: {loggedInUser.useremail} {loggedInUser.verified === true ? <span className="VOK"></span> : <span className="VNO"></span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="CompleteOrders">
                        Completed Order[s]
                    </div>
                    {preLoad ? <div className="ProductForCheckOut">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(product => <tr key={product._id}>
                                        <td><img src={product.productIMG} alt={product.name} /></td>
                                        <td>{product.name}</td>
                                        <td>1</td>
                                        <td>৳ {product.price}</td>
                                    </tr>)
                                }
                                <tr>
                                    <td colSpan="1" className="TotalPrice">Grand Total</td>
                                    <td colSpan="1" className="TotalPrice"></td>
                                    <td colSpan="1" className="TotalPrice">{orders.length}</td>
                                    <td colSpan="1" className="TotalPrice">৳ {totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> : <div className="center">
                        <PreLoader />
                    </div>}
                </div>
            </div>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default BookedService;