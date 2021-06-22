import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import PreLoader from '../../Common/PreLoader/PreLoader';
import Service from './Services';

const ServiceContainer = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://pacific-citadel-04482.herokuapp.com/services')
            .then(res => res.json())
            .then(service => {setServices(service)
            console.log('from fetch request',service)
            })
    }, [])

    return (
        <div className="container m-auto" >
                <div className="row">
                    {
                        services.length === 0 && <PreLoader />
                    }
                    {
                        services.map(sv => <Service key={sv._id} service={sv}></Service>)
                    }
                </div>
            </div>
    );
};

export default ServiceContainer;