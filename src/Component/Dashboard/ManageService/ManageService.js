
import React, { useEffect, useState } from 'react';
import DashboardMenu from '../DashboardMenu/DashboardMenu';
import DeleteService from './DeleteService';

const ManageService = () => {
    document.title = 'Delete Services | Dashboard';
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch('https://pacific-citadel-04482.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setManageOrder(data)
                // console.log('Fetch', data)
            })
    }, [])

    return (
        <div>            <DashboardMenu/>
        <div className="Details">
            <div className="Box">
                {manageOrder.length === 0 ? <div className="loadingCss"></div> : <h3 style={{ color: '#6b7c93' }}>Manage Services</h3>}
                {
                    manageOrder.map(serviceDelete => <DeleteService key={serviceDelete._id} serviceDelete={serviceDelete}></DeleteService>)
                }
            </div>
        </div></div>
    );
};

export default ManageService;