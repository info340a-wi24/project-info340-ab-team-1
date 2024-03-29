
import React from "react";

export default function FilterForm( {onSubmit} ) {
    //self explanatory, returns the value that is filled in the form to Home.
    const handleSubmit = (event) => {
        event.preventDefault();
        const selectedFilter = event.target.elements['bike-rack-type'].value;
        onSubmit(selectedFilter);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bikeRackFilter">
                <label htmlFor="bike-rack-type"><b>Bike rack type: </b></label>
                <label htmlFor="covered">Covered</label>
                <input type="radio" id="covered" name="bike-rack-type" value="covered"/>
                <label htmlFor="uncovered">Uncovered</label>
                <input type="radio" id="uncovered" name="bike-rack-type" value="uncovered"/>
                <label htmlFor="locked">Locked</label>
                <input type="radio" id="locked" name="bike-rack-type" value="locked"/>
                <label htmlFor="all">No filter</label>
                <input type="radio" id="all" name="bike-rack-type" value=""/>
                <input type="submit" value="Filter"/>
            </div>
      </form>
    )
}