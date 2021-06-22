import React from 'react';
import NavBar from '../../Common/NavBar/NavBar';
import './Carousel.css';
import { FaAngleDoubleRight } from "react-icons/fa";
const Carousel = () => {
    return (
        <div className="">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://i.ibb.co/2SHYhZf/Aerial-view-of-container-cargo-ship-in-sea.jpg/" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="ColorText">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            <div className="slider-btn">
                                <button className="btn"><span className="arrow"><FaAngleDoubleRight/></span>Get Our services</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://i.ibb.co/pR0f863/slider1-bg.jpg/" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="ColorText">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                            <div className="slider-btn">
                                <button className="btn"><span className="arrow"><FaAngleDoubleRight/></span>Get Our services</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://i.ibb.co/vvyN4sw/warehouse.jpg/" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="ColorText">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                            <div className="slider-btn">
                                <button className="btn"><span className="arrow"><FaAngleDoubleRight/></span>Get Our services</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;