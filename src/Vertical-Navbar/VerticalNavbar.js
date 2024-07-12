import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./VerticalNavbar.css";

const VerticalNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item" id="setting"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item" id='profile'><a className="nav-link" href="#profile">My Profile</a></li>
                <li className="nav-item" id='booking'><a className="nav-link" href="#">My Bookings</a></li>
                <li className="nav-item" id="setting"><a className="nav-link" href="#">Settings</a></li>
                <li className="nav-item" id="setting"><a className="nav-link" href="#">Customer Profiles</a></li>
                <li className="nav-item" id="setting"><a className="nav-link" href="#">Modifications</a></li>
                <li className="nav-item" id="setting"><a className="nav-link" href="#">Booking Details</a></li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;