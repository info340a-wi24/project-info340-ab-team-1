import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
        <div className="navbar">
            <div className="logo">Bike Locator</div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    </nav>
    )
}