
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import PreLoader from '../../Common/PreLoader/PreLoader';

const BookingCard = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceForBook, setServiceForBook] = useState([]);
  const { name, price, productIMG, weight } = serviceForBook;
  const [preLoad, setPreLoad] = useState(false);
  useEffect(() => {
    fetch(`https://pacific-citadel-04482.herokuapp.com/services/${id}`)
      .then(res => res.json())
      .then(product => {
        setServiceForBook(product[0])
        setPreLoad(true);
      })
  }, []);

  const sendServiceInfoInDB = {
    name: name,
    price: price,
    productIMG: productIMG,
    status:"pending"
  }
  const confirmOrder = () => {
    const serviceDetails = { ...loggedInUser, ...sendServiceInfoInDB, Date: (new Date().toString("dddd, mmmm dS, yyyy, g:i A TT")) };
    const url = `https://pacific-citadel-04482.herokuapp.com/confirmService`;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('successfull')
          history.push('/dashboard/booked-service');
        }
      })
  }

  return (
    <div className="marginTopBottom">
      <div className="container">
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
              <tr>
                <td><img src={productIMG} alt={name} /></td>
                <td>{name}</td>
                <td>1</td>
                <td>৳ {price}</td>
              </tr>
            </tbody>
          </table>
          <div className="CheckOutBtn">
            <button className="OrderButton" onClick={() => confirmOrder()}>Confirm Order</button>
          </div>
        </div> : <div className="center">
          <PreLoader />
        </div>}
      </div>
    </div>
  );
};

export default BookingCard;