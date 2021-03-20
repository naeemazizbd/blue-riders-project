import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import serviceData from '../../ServiceData/ServiceData.json';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import BaseMap from '../BaseMap/BaseMap';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const getService = serviceData.find(service => service.id === id);
        setService(getService);
    }, [id])

    const [loginUser, setLoginUser] = useContext(UserContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data)

    };
    console.log(watch("example"));
    return (
        <div className="row mt-5 d-flex justify-content-center">
            <div className="col-md-4 mt-5 p-4 bg-light shadow">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control m-2" name="name" defaultValue={loginUser.name} ref={register({ required: true })} placeholder="name" />
                    {errors.name && <span>name is required</span>}

                    <input className="form-control m-2" name="email" defaultValue={loginUser.email} ref={register({ required: true })} placeholder="email" />
                    {errors.email && <span>Email is required</span>}

                    <input className="form-control m-2" name="address" ref={register({ required: true })} placeholder="Start Location" />
                    {errors.address && <span>Start location is required</span>}

                    <input className="form-control m-2" name="text" ref={register({ required: true })} placeholder="End Location" />
                    {errors.phone && <span>End location is required</span>}

                    <input className="form-control m-2" name="date" type="date" ref={register({ required: true })} placeholder="End Location" />
                    {errors.phone && <span>End location is required</span>}
                    
                    <Link to="/search-result">
                        <button className=" m-2 form-control btn btn-primary">Search</button>
                    </Link>
                </form>
            </div>
            <div className="col-md-6 p-1 mt-5 ms-2  rounded bg-dark">
                <BaseMap className="h-100 w-100" />
            </div>
        </div>
    );
};

export default ServiceDetail;