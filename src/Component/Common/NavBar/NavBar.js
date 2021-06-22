import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImLocation2, ImMail2, ImPhone } from "react-icons/im";
import { UserContext } from '../../../App';
import { useAuth } from '../../../Authentication';

const NavBar = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext)
    const {signOut } = useAuth() || {};
    const refreshPage = ()=>{
        window.location.reload();
        alert('Thank you for staying with us')
        sessionStorage.removeItem('token', loggedInUser.idToken);
     }

    return (
        <div className="container">
            <div className="d-flex row justify-content-center">
                <div className="col-md-3 me-auto fs-6"><span><ImPhone/> 01708902648</span><br /><span className=""><ImMail2/> thohanur143@gmail.com</span></div>

                <div className="col-md-4"><ImLocation2/> Dumuria, Khulna, Bangladesh</div>
                <div className="col-md-5 ms-auto text-end fs-4">
                    <a href="https://www.facebook.com/thohanurrahman.rahman" target="_blank"><FaFacebook className="me-2"/></a>
                    <a href="https://www.instagram.com/thohanur_rahman/" target="_blank"><FaInstagram className="me-2"/></a>
                    <a href="https://www.linkedin.com/in/twahanur-rahman-b615271ba/" target="_blank"><FaLinkedin className="me-2"/></a>
                    <a href="https://github.com/Thohanur"  target="_blank"><FaGithub className="me-2"/></a>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" path="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-5  ">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown me-5  ">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/"></Link></li>
                                    <li><Link className="dropdown-item" to="/">Basic Courier</Link></li>
                                    <li><Link className="dropdown-item" to="/">Fast & Furiious Courier</Link></li>
                                    <li><Link className="dropdown-item" to="/">air Courier</Link></li>
                                    <li><Link className="dropdown-item" to="/">Ocean Freight</Link></li>
                                    <li><Link className="dropdown-item" to="/">Warehouse Courier</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-5  ">
                                <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item me-5  ">
                                <Link className="nav-link" to="/">Contact Us</Link>
                            </li>
                            <li className="nav-item me-5  ">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item me-5  ">
                                <Link className="nav-link" to="/">Admin</Link>
                            </li>
                            {loggedInUser.email ? <li className="nav-item me-5  ">
                                <Link className="nav-link" onClick={signOut,refreshPage} >Sign Out</Link></li>:<li className="nav-item me-5  ">
                                <Link className="nav-link" to="/login">Log In</Link>
                            </li>}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;