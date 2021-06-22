import React from 'react';
import { AiOutlineDollar, AiOutlineLock } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
const AboutQueto = () => {
    return (
        <div className="container" style={{ position: 'relative', marginTop: '-100px', zIndex: '34' }}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4 ColorBg text-white p-5" style={{ boxShadow: '5px 5px 20px black' }}>
                    <div className="text-center fs-1 fw-bolder" ><AiOutlineDollar style={{ fontSize: '8rem', textShadow: '5px 5px #fff' }} /></div>
                    <div className="fs-1 fw-bolder text-center">Best Pricing</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cum! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="col-md-4 p-5 " style={{ background: '#18181a', boxShadow: '5px 5px 20px black' }}>
                    <div className="text-center fs-1 fw-bolder ColorText" ><AiOutlineLock style={{ fontSize: '8rem', textShadow: '5px 5px #fff' }} /></div>
                    <div className="fs-1 fw-bolder text-center ColorText">High Privacy</div>
                    <p className="ColorText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cum! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="col-md-4 ColorBg text-white p-5" style={{ boxShadow: '5px 5px 20px black' }}>
                    <div className="text-center fs-1 fw-bolder" ><FiPhoneCall style={{ fontSize: '8rem', textShadow: '5px 5px #fff' }} /></div>
                    <div className="fs-1 fw-bolder text-center">24/7 Help Service</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cum! Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutQueto;