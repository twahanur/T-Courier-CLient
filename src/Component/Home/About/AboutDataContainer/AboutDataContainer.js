import React from 'react';


const AboutDataContainer = ({ data }) => {
    console.log(data)
    return (
        <div>
            {data.length == 0 ? <h1 className="fs-1 d-flex justify-content-center align-items-center ColorText">Loading.......</h1> :
                <div className="row">

                    <div className="col-md-6 me-auto">
                        <h1 className="ColorText">{data.title}</h1>
                        <h6>{data.details}</h6>
                        <br />
                        <span className="ColorText"> Benifits:</span>
                        <ul className="divst-style-none">
                            <div>{data.benifit1}</div>
                            <div>{data.benifit2}</div>
                            <div>{data.benifit3}</div>
                            <div>{data.benifit4}</div>
                            <div>{data.benifit5}</div>
                        </ul>
                    </div>
                    {data.img.length == 0 ? <h1 className="fs-1 d-flex justify-content-center align-items-center ColorText">Loading.......</h1> :
                    <div className="col-md-6 ms-auto">
                        <img src={data.img} alt="" className="img-fluid" />
                    </div>}
                </div>
            }
        </div>
    );
};

export default AboutDataContainer;