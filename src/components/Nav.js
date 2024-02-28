import React from "react";
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <div className="navbar">
                <div className="logo">Bike Locator</div>
                <div className="nav-links">            
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <div className="dropdown">
                        <button className="dropbtn">Filter</button>
                        <div className="dropdown-content">
                            {/* Filter options here
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a> */}
                        </div>
                    </div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button type="button">&#128269;</button>
                </div>
                <div className="user-account">
                    <button className="account-btn">Account</button>
                </div>
                <div className="menu-icon">&#9776;</div>
            </div>
        </nav>
    )
}

export default NavBar;