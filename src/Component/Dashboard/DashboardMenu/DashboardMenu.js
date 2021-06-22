import { History } from '@material-ui/icons';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useAuth } from '../../../Authentication';
import './DashboardMenu.css';
// import { useHistory } from "react-router-dom";



const DashboardMenu = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmine, setIsAdmine] = useState(false);
    const { signOut } = useAuth() || {};

    const refreshPage = ()=>{
        // const history = useHistory();
        alert('Thank you for staying with us')
        sessionStorage.removeItem('token', loggedInUser.idToken);
     }




    useEffect(() => {
        fetch('https://pacific-citadel-04482.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmine(data));
    }, [])
    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    {
                        isAdmine.email === loggedInUser.email ? 
                        <div>
                            <div>
                                <li>
                                    <Link to="/addService" className="text-white" >
                                        <span>Add Service</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/allService" className="text-white">
                                        <span>Services</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/manage-orders" className="text-white">
                                        <span>Manage Order</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/addAdmin" className="text-white" >
                                        <span>Add Admine</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Admine/setting" className="text-white" >
                                        <span>Settings</span>
                                    </Link>
                                </li>
                            </div>
                        </div> :
                         <div>
                            <li>
                                <Link to="/dashboard" className="text-white">
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/booked-service" className="text-white">
                                    <span>BookedService</span>
                                </Link>
                            </li>

                        </div>
                    }

                </ul>
                <div>
                    {<Link to="/" onClick={signOut , refreshPage} className="text-white"> <span>Logout</span></Link>}
                </div>
            </div>
        </div>
    );
};

export default DashboardMenu;