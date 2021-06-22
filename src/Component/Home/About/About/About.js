import React from 'react';
import AboutDataContainer from '../AboutDataContainer/AboutDataContainer';
import AboutDetails from '../AboutDetails/AboutDetails';
import AboutQueto from '../AboutQuote/AboutQueto';

const About = () => {
    return (
       <div>
            <div className="d-flex justify-content-center">
            <AboutQueto/>
        </div>
        <AboutDetails></AboutDetails>
       </div>
    );
};

export default About;