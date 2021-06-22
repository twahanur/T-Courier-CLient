import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import './AddService.css';
import { UserContext } from '../../../App';
import DashboardMenu from '../DashboardMenu/DashboardMenu';

const AddService = () => {
    document.title = 'Add Products - Deshi-Trolly.Com';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [upServiceImg, setUpServiceImg] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            details: data.details,
            Service: upServiceImg
        };
        const url = `https://pacific-citadel-04482.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Successfully added')
                    history.push('/');
                }
            })
    };

    const handleServiceImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '121993859ba837317c11789410aeb8ab');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setUpServiceImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    return (
        <div className="d-flex">
            <DashboardMenu/>
            <div className="container ms-auto">
            <div className="ProductOptions ms-5">
                <div className="PageTitle">
                    <h3>Add Your Product</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="FormDesign">
                        <label htmlFor="ProductName">Product Name</label><br />
                        <input className="InputText" id="ProductName" name="name" placeholder="Enter Service Name" {...register('name', { required: true })} />
                        <p className="ErrorMSG">{errors.name && errors.name.type === "required" && <span>This is required</span>}</p>
                    </div>
                    <div className="FormDesign">
                        <label htmlFor="ProductPrice">Service charge</label><br />
                        <input className="InputText" id="ProductPrice" name="price" placeholder="Price" {...register('price', { required: true })} /><br />
                        <p className="ErrorMSG">{errors.price && <span>This field is required</span>}</p>
                    </div>
                    <div className="FormDesign">
                        <label htmlFor="seller">Service Details</label><br />
                        <input className="InputText" id="seller" name="details" placeholder="service Details"  {...register('details', { required: true })}/><br />
                        <p className="ErrorMSG">{errors.seller && <span>This field is required</span>}</p>
                    </div>
                   
                    <div className="FormDesign">
                        <label htmlFor="ProductImage">Service Image</label><br />
                        <input className="InputText" id="ProductImage" name="exampleRequired" type="file" onChange={handleServiceImageUpload} />
                    </div>
                    <br />
                    <div className="ImageUploadPreview">
                        {upServiceImg ? <div className="Deff"><img src={upServiceImg} alt="Upload Success" /><p>Upload Success</p></div> : <div className="Deff"><img src="https://i.ibb.co/S7bxDjK/img-Preview.png" alt="No Image Uploaded Yet" /><p>No Image Uploaded Yet</p> </div>}
                    </div>
                    <input className="InputSubmit" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddService;