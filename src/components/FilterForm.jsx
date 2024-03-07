import React from "react";

export default function FilterForm() {
    return (
        <form>
            <div>
            <label for="bike-rack-type">Bike rack type:</label>
            <input type="radio" id="covered" name="bike-rack-type" value="covered"/>
            <label for="covered">Covered</label>
            <input type="radio" id="uncovered" name="bike-rack-type" value="uncovered"/>
            <label for="uncovered">Uncovered</label>
            <input type="radio" id="locked" name="bike-rack-type" value="locked"/>
            <label for="locked">Locked</label>
            </div>

            <div>
                <label for="bike-location">Bike location:</label>
                <input type="radio" id="on-campus" name="bike-location" value="on-campus"/>
                <label for="on-campus">On campus</label>
                <input type="radio" id="off-campus" name="bike-location" value="off-campus"/>
                <label for="off-campus">Off campus</label>
            </div>



            <div>
            <input type="submit" value="Submit"/>
            </div>
      </form>
    )
}