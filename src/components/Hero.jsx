import React from "react";

export default function Hero( {scrollToMap} ) {
    return (
        <div className="heroContainer">
            <div className="heroContent">
                <h1>Unlock Your Adventure: Find Bike Racks Near You</h1>
                <p>Seamless rides, hassle-free parking, every time.
                Our innovative app helps you locate bike racks effortlessly, ensuring your rides are seamless from start to finish.
                With thousands of satisfied users, we've revolutionized urban cycling, making it easier and more enjoyable than ever.</p>
                <button className="heroButton" onClick={scrollToMap}>Get Started</button>
            </div>
            <img className="heroImage" src="bikes.png" alt="A person riding a bike in Seattle in monochromatic theme, with the Space Needle, Mt Rainier, and the Seattle skyline in the background"/>
        </div>
    )
}