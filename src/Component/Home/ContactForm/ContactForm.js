import React from 'react';
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
       <div style={{background:'rgba(197, 255, 150, 0.918)',margin:'0',padding:'0'}}>
           <div className="ColorText text-center fs-1 fw-bolder">Contact with us</div>
            <div className=" p-5 d-flex justify-content-center align-items-center">
            <form className="pt-5 mb-5 row  border" style={{boxShadow:'5px 5px 30px green'}} onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-5">
                    <label className="ColorText fw-bolder">Entey Your Name</label>
                    <br />
                    <input className="form-control" type="text"   {...register} placeholder="Name" />
                </div>

                <div className="col-md-5 ms-auto ">
                    <label className="ColorText fw-bolder">Entey Your Phone Number</label>
                    <br />
                    <input className="form-control" type="tel"  {...register} placeholder="Phone Number"  />
                </div>


                <div className="col-md-5 ">
                    <label className="ColorText fw-bolder">Entey Your email</label>
                    <br />
                    <input className="form-control" type="text"  {...register} placeholder="name@example.com" />
                </div>


                <div className="col-md-5 ms-auto">
                    <label className="ColorText fw-bolder">Entey Your massage</label>
                    <br />
                    <input className="form-control" type="text" {...register} placeholder="Entey Your massage" />
                </div>


                <div className="col-md-12 mb-3">
                    <label className="ColorText fw-bolder">Entey Your massage</label>
                    <br />
                    <input className="form-control" type="textArea"  {...register} />
                </div>


                <input type="submit" />
            </form>
        </div>
       </div>
    );
};

export default ContactForm;