import React from "react";

export default function Hero() {
    return (
        <div className="heroContainer">
            <div className="heroContent">
                <h1>Unlock Your Adventure: Find Bike Racks Near You</h1>
                <p>Seamless rides, hassle-free parking, every time.</p>
                <button className="heroButton">Get Started</button>
            </div>
            <img className="heroImage" src="bikes.png" alt="A person riding a bike in Seattle in monochromatic theme, with the Space Needle, Mt Rainier, and the Seattle skyline in the background"/>
        </div>
    )
}