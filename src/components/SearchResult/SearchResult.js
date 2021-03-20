import React from 'react';
import BaseMap from '../BaseMap/BaseMap';

const SearchResult = () => {
    return (
        <div className="row mt-5 d-flex justify-content-center">
            <div className="col-md-4 m-5 bg-light p-5  shadow">
                <div className="bg-primary rounded text-white ">
                    <p>Start Location</p>
                    <p>End Location</p>
                </div>
                <div className="d-flex">
                    <p><i class="fas fa-biking text-primary fa-1x fw-bold ms-2"> Blue Riders Bike</i></p>
                </div>
                <div className="d-flex">
                    <p><i class="fas fa-car text-primary fa-1x fw-bold ms-2"> Blue Riders Car</i></p>
                </div>
                <div className="d-flex">
                    <p><i class="fas fa-bus text-primary fa-1x fw-bold ms-2"> Blue Riders Bus</i></p>
                </div>
                <div className="d-flex">
                    <p><i class="fas fa-subway text-primary fa-1x fw-bold ms-2"> Blue Riders Train</i></p>
                </div>
            </div>
            <div className="col-md-6  p-1 m-5 ms-2 rounded bg-dark ">
                <BaseMap />
            </div>
        </div>
    );
};

export default SearchResult;