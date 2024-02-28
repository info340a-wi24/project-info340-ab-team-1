import React from "react";
import NavBar from "./components/Nav";
import { Route, Routes } from 'react-router-dom';
import About from "./pages/About";
// import Home from "./pages/Home";
// import Register from "./pages/Register";

export function App() {
  return (
    <>
		<NavBar />
		{/* <Routes>
			<Route path="*" element={<Home />}/>
			<Route path="/about" element={<About />}/>
			<Route path="/register" element={<Register />}/>		
		</Routes> */}
		<Routes>
			<Route path="/about" element={<About />} />
		</Routes>
		
      {/*<body>
		<NavBar />
        <main>
			<div class="content">
				<h1>Bike Rack Locator</h1>
				<p>Find the nearest bike racks and contribute by adding new locations!</p>

				<div class="map-placeholder" id="map">
					<iframe title="Map Placeholder"></iframe>
				</div>
				<AddBikeForm />

			</div>

			<div class="content">
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
  		</body> */}
    </>
  );
}

export default App;
