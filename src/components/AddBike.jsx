import React, { useState } from "react";

export default function AddBikeForm() {

    return (
        <div class="add-location-form">
            <h2>Add New Bike Rack Location</h2>
            <form action="#" method="post" id="newLocationForm">
                <label for="locationName">Location Name:</label>
                <input type="text" id="locationName" name="locationName" required/>

                <label for="latitude">Latitude:</label>
                <input type="text" id="latitude" name="latitude" required/>

                <label for="longitude">Longitude:</label>
                <input type="text" id="longitude" name="longitude" required/>

                <button type="submit">Add Location</button>
            </form>
        </div>
    )
}