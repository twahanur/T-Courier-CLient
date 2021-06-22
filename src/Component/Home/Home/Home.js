import React from 'react';
import NavBar from '../../Common/NavBar/NavBar';
import Footer from '../../Common/Footer/Footer';
import Carousel from '../Carousel/Carousel';
import ContactForm from '../ContactForm/ContactForm';
import About from '../About/About/About';
import ServiceContainer from '../Service/ServiceContainer';
import Reviews from '../Reviews/Reviews'
const Home = () => {
    return (
        <div>
            <NavBar/>
            <Carousel/>
            <About/>
            <ServiceContainer/>
            <Reviews/>
            <ContactForm/>
            <Footer/>

        </div>
    );
};

export default Home;