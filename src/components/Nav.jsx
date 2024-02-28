import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
        <div class="navbar">
            <div class="logo">Bike Locator</div>
            <div class="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    </nav>
    )
}