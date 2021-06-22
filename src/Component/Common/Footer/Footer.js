import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footerImg">
            <div className="p-5">
                <div className="row">
                    <div className="com-md-3 col-xl-3 col-l-3 col-sm-6">
                        <h1>expoint-logo</h1>
                        <small>We are the Top Courier Service Provider and Logistics Solutions. We’re services around over the worldwide. We never give up on the challenges.</small>
                    </div>
                    <div className="col-md-4 col-xl-3 col-l-3 col-sm-6">
                        <ul>
                            <div className="mt-4"><h3>Explore</h3></div>
                            <li className="mt-4">About Company</li>
                            <li className="mt-4">Latest News</li>
                            <li className="mt-4">Get a Quote</li>
                            <li className="mt-4">Pricing Guide </li>
                            <li className="mt-4">Helpful FAQ</li>
                            <li className="mt-4">SiteMap</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-xl-3 col-l-3 col-sm-6">
                        <ul>
                            <div className="mt-4"><h3>Services</h3></div>
                            <li className="mt-4"><Link to="/">- Basic Courier</Link></li>
                            <li className="mt-4"><Link to="/">- Express Courier</Link></li>
                            <li className="mt-4"><Link to="/">- Fast & Furiious Courier</Link></li>
                            <li className="mt-4"><Link to="/">- air Courier</Link></li>
                            <li className="mt-4"><Link to="/">- Ocean Freight</Link></li>
                            <li className="mt-4"><Link to="/">- Warehouse Courier</Link></li>

                        </ul>
                    </div>
                    <div className="col-md-4 col-xl-3 col-l-3 col-sm-6">
                        <ul>
                            <div className="mt-4"><h3>Our Social Media</h3></div>
                            <div className="mt-4">Stay connected With us for getting more update and offers</div>
                            <div className="mt-4">
                                <a href="#" className="me-3 fs-2"><FaFacebook/></a>
                                <a href="" className="me-3 fs-2"><FaInstagram/></a>
                                <a href="" className="me-3 fs-2"><FaGithub/></a>
                                <a href="" className="me-3 fs-2"><FaLinkedin/></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;