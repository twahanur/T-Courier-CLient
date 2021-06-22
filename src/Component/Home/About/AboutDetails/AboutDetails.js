import React, { useState } from 'react';
import AboutDataContainer from '../AboutDataContainer/AboutDataContainer';
import AboutData from '../AboutData/AboutData';
import { FiPhoneCall } from "react-icons/fi";
import { BiWorld  } from "react-icons/bi";
import { FaTruck, FaRegClock  } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
const AboutDetails = () => {
    const [boxId, setBoxId] = useState(1)
    const handleContainers = (dataId) => setBoxId(dataId);
    const findData = AboutData.find(data => data.id == boxId);

    const boxStyle = {
        minWidth:'150px'
    }
    return (
        <div className="container mt-5">
            <div className="row p-3">
                <div>
                    <div className="d-flex justify-content-center">
                        <div className="btn btn-outline-info fs-3 ColorText w-75 " onClick={() => handleContainers(1)}  >
                            <FiPhoneCall className="fs-1 mt-3 mb-3" />
                            <div  >24/7 SERVICE</div>
                        </div>
                        <div className="btn btn-outline-info fs-3 ColorText w-75 " onClick={() => handleContainers(2)}   >
                            <BiWorld className="fs-1 mt-3 mb-3" />
                            <div >WORLD WIDE</div>
                        </div>

                        <div className="btn btn-outline-info fs-3 ColorText w-75 "  onClick={() => handleContainers(3)}  >
                            <FaTruck className="fs-1 mt-3 mb-3" />
                            <div>DELIVERY</div>

                        </div>
                        <div className="btn btn-outline-info fs-3 ColorText w-75 "  onClick={() => handleContainers(4)} >
                            <FaRegClock className="fs-1 mt-3 mb-3" />
                            <div>TIME</div>
                        </div>

                        <div className="btn btn-outline-info fs-3 ColorText  w-75 " onClick={() => handleContainers(5)} >
                            <RiTeamFill className="fs-1 mt-3 mb-3"  />
                            <div>TEAM</div>
                        </div>
                    </div>
                </div>
                <ul>

                    <AboutDataContainer data={findData}></AboutDataContainer>

                </ul>
            </div>
        </div>
    );
};

export default AboutDetails;