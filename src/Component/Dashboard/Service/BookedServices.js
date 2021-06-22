
import React, { useEffect, useState } from 'react';
import ServiceBox from './BookedServicesTable';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

const BookedServices = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://pacific-citadel-04482.herokuapp.com/bookedServices')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <DashboardMenu></DashboardMenu>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <ServiceBox appointments={appointments} />
            </div>
        </div>
    );
};

export default BookedServices;