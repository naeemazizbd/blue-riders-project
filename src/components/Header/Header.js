import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="fixed sticky-top">
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/home"> <i class="fas fa-biking text-primary fa-1x fw-bold ms-2"> Blue Riders 24</i> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/map">Map</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary " type="submit">Search</button>
            </form>
            <span className="navbar-text">
              <Link to="/login">
                <button className="btn btn-primary mx-3"> <i class="fas fa-user-circle"></i> Account</button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;