import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import axios from 'axios';
import DashboardMenu from '../DashboardMenu/DashboardMenu';


const AddAdmin = () => {
    document.title = 'Make Admin | Dashboard';
    const [makeAdmin, setMakeAdmin] = useState(null);
    const [adminMail, setAdminMail] = useState(null);
    const [adminImg, setAdminImg] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    // Handle admin picture handleSubmit
    const handleFile = event => {
        const imageData = new FormData();
        imageData.set('key', '121993859ba837317c11789410aeb8ab');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setAdminImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const onSubmit = data => {
        setAdminMail(data)
    };
    const adminInsert = {
        ...adminMail,
        photo: adminImg,
        permission: "admin"
    };

    useEffect(() => {
        if (adminMail === null || adminMail === undefined) {
            alert("Something went wrong!")
        } else {
            const url = `https://pacific-citadel-04482.herokuapp.com/addAdmin`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adminInsert)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setMakeAdmin(data);
                        alert('Request To Make Admin Is Successful');
                        history.push('/dashboard');
                    }
                })
        }
    }, [adminMail])

    return (
        <div className="">
            <DashboardMenu className="me-5"/>
        <div className="card container">
            <form className="MakeAdminForm" onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{ color: '#6b7c93' }}>Make Admin</h3>
                <label>Please enter your name <span style={{color: 'red'}}>*</span></label>
                <input type="text" {...register("name", { required: true })} />
                {errors.email && <span className="FormError">Name is required</span>}
                <label>Please enter your email address <span style={{color: 'red'}}>*</span></label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span className="FormError">Email is required</span>}
                <input type="file" {...register("photo", { required: true })} onChange={handleFile} />
                {errors.photo && <span className="FormError">Image is required</span>}
                <button type="submit">Make Admin</button>
            </form>
            {makeAdmin === null ? "" : makeAdmin === true ? <p>Request to make admin is successful</p> : <p>Request to make admin is unsuccessful</p>}
        </div>
    </div>
    );
};

export default AddAdmin;