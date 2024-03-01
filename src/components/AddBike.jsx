import React, { useState } from "react";
import { getDatabase, ref, set as firebaseSet, push } from 'firebase/database'
import FilterForm from './FilterForm'

export default function AddBikeForm() {
    const [form, setForm] = useState({
        locationName: "",
        latitude: "",
        longitude: "",
        type: ""
    });

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value}
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const db = getDatabase();
        const bikerackRef = ref(db, "racks")
        const newBikeRack = { ...form };
        const newbikeRef = push(bikerackRef, newBikeRack);
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
                <div className="bike-rack-type-buttons" style={{ border: "2px solid #4CAF50", borderRadius: "6px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f2f2f2" }}>
                    <label htmlFor="bike-rack-type">Bike rack type: </label>
                    <label htmlFor="covered">Covered: </label>
                    <input style={{width: '20px', height: '20px', marginRight: '10px' }} type="radio" id="covered" name="bike-rack-type" value="covered" onChange={(e) => updateForm({ type: "covered" })}/>
                    <label htmlFor="uncovered">Uncovered: </label>
                    <input style={{width: '20px', height: '20px', marginRight: '10px' }} type="radio" id="uncovered" name="bike-rack-type" value="uncovered" onChange={(e) => updateForm({ type: "uncovered" })}/>
                    <label htmlFor="locked">Locked: </label>
                    <input style={{width: '20px', height: '20px', marginRight: '10px' }} type="radio" id="locked" name="bike-rack-type" value="locked" onChange={(e) => updateForm({ type: "locked" })}/>
                </div>

                <button type="submit">Add Location</button>
            </form>




        </div>
    )
}