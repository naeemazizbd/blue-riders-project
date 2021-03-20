import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="m-5 p-5">
            <h3>Sorry.. This page not available.Goto <Link to="/home">Home</Link>  Page</h3>
            <img src="https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png" alt=""/>
        </div>
    );
};

export default NotFound;