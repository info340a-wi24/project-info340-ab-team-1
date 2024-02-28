import React, { useState } from "react";

export default function AddBikeForm() {
    const [form, setForm] = useState({
        locationName: "",
        latitude: "",
        longitude: "",
    });

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value}
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const newBikeRack = { ...form };
        console.log(newBikeRack)
    }

    return (
        <div className="add-location-form">
            <h2>Add New Bike Rack Location</h2>
            <form id="newLocationForm" onSubmit={onSubmit}>
                <label htmlFor="locationName">Location Name:</label>
                <input
                    type="text"
                    id="locationName"
                    name="locationName"
                    value={form.locationName}
                    onChange={(e) => updateForm({ locationName: e.target.value })}
                />

                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="number"
                    id="latitude"
                    name="latitude"
                    value={form.latitude}
                    onChange={(e) => updateForm({ latitude: e.target.value })}
                />

                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="number"
                    id="longitude"
                    name="longitude"
                    value={form.longitude}
                    onChange={(e) => updateForm({ longitude: e.target.value })}
                />

                <button type="submit">Add Location</button>
            </form>


        </div>
    )
}