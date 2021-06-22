
import React from 'react';

import DashboardMenu from '../DashboardMenu/DashboardMenu';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {


    return (
        <section className="d-flex">
            <DashboardMenu />
            <div className="container">
                <h1 className="text-align-center d-flex ColorText fs-1"> Welcome to the Dashboard</h1>
            </div>
        </section>
    );
};

export default Dashboard;