import React, { useState } from "react";
import { Link } from "react-router-dom";
import serviceData from "../../ServiceData/ServiceData.json";
import './Home.css';
const Home = () => {
	const [services] = useState([...serviceData]);
	return (
		<div className="mb-5">
			<div className="row d-flex  justify-content-center content-align-center h-100 mb-5 mt-5">
				<h1 className="display-3">Welcome to <span className="text-primary">Blue Riders 24</span> </h1>
				<h3>Select Your Ride...</h3>
				{services.map((service) => (
					<div className="col-xl-2 col-lg-2 col-md-4 col-sm-8 " key={service.id}>
						<Link className="text-decoration-none" to={`/service-details/${service.id}`}>
							<div className="p-3 m-1 w-100 h-100 shadow rounded card-style">
								<div className="w-100 h-75">
									<img className="w-100 h-75 " src={service.blueImg} alt="" />
								</div>
								<h2 >{service.blueName}</h2>
								<h5>{service.blueService}</h5>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
