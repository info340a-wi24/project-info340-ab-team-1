import React, {useState, useEffect} from "react";
import AddBikeForm from "../components/AddBike";
import Map from "../components/Map";
import FilterForm from "../components/FilterForm";
import {getDatabase, ref, onValue, get, orderByChild, equalTo, query } from 'firebase/database'

export default function Home(props){
	const [data, setData] = useState()
	const [filter, setFilter] = useState('null') //initial value 'null' is because of the buggy initial load. if the initial state of filter was: '', then updating it with the form would not cause a rerender. so it needs an initial value other than ''
	const [reset, setReset] = useState(0);
	
	useEffect(() =>{
		async function fetchFilter() {
			const db = getDatabase();
			const racksRef = ref(db, "racks");
			const orderByType = query(racksRef, orderByChild('type'), equalTo(filter)) // makes a query to the database to only return values with type=filter
			const querySnapshot = await get(orderByType);
			setData(querySnapshot)
		}
		if (filter === ''){ //filter==='' is for when no filter, so that it queries all types. 
			setReset(reset + 1)
		} else { fetchFilter() } 
	}, [filter]) //anytime filter is updated

	const handleFilterSubmit = (selectedFilter) => { //this has to do with updating filter value when the filter form is submitted
		setFilter(selectedFilter);
	};
	
	useEffect(()=>{ //this is getting all of the bikeracks.
		async function noFilterLoad() {
			const db = getDatabase();
			const racksRef = ref(db, "racks");
			const first = await get(racksRef);
			setData(first)
		}
		noFilterLoad()
	}, [, reset])
	/*
	useEffect(() =>{
		const db = getDatabase();
		const racks = ref(db, "racks")
		onValue(racks, (snapshot) => {
			setData(snapshot)
		})
	}, [reset])*/

    return (
        <>
        <main>
			<div className="content">
				<h1>Bike Rack Locator</h1>
				<p>Find the nearest bike racks and contribute by adding new locations!</p>
				<FilterForm onSubmit={handleFilterSubmit} />
				<Map locations={data}/>
				<AddBikeForm />

			</div>

			<div className="content">
				<h1>About Bike Locator</h1>
				<p>Welcome to Bike Locator, your go-to platform for finding bike racks around the city.</p>

				<h2>Our Mission</h2>
				<p>Our mission is to make bike commuting easier by providing a comprehensive and up-to-date map of bike rack locations.</p>

				<h2>Why Choose Bike Locator?</h2>
				<ul>
					<li>Find the nearest bike racks with ease.</li>
					<li>Contribute to the community by adding new bike rack locations.</li>
					<li>Filter and search based on rack capacity and bike location.</li>
				</ul>

				<h2>Contact Us</h2>
				<p>If you have any questions or suggestions, feel free to reach out to us at <a href="mailto:info@bikelocator.com">info@bikelocator.com</a>.</p>
			</div>
        </main>

        <footer>
			<p>&copy; 2024 Bike Locator. All rights reserved.</p>
        </footer>

        <script src="https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.js"></script>
        <script src="js/index.js"></script>
        </>
    )
}