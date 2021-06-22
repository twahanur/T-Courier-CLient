import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './DeleteService.css'

const DeleteService = ({serviceDelete}) => {
    const { name, price, details, productIMG } = serviceDelete;
    const history = useHistory();

    const deleteService = id => {
        // console.log(id)
        const url = `https://pacific-citadel-04482.herokuapp.com/manageService/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Delete Successful');
                    history.push('/dashboard');
                }
            })
    }
    return (
        <div className="RemoveService">
            <div className="RemoveServiceList">
                <div className="RemoveServiceImage">
                    <img src={productIMG} alt="" />
                </div>
                <div className="RemoveServiceBtn">
                    <button onClick={() => deleteService(serviceDelete._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
            <div className="RemoveServiceName">
                <h3>{name}</h3>
            </div>
            <div className="RemoveServiceDes">
                <p>{details}</p>
            </div>
        </div>
    );
};

export default DeleteService;