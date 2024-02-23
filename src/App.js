import React from "react";

export function App() {
  return (
    <div>
      <body>
        <nav>
			<div class="navbar">
				<div class="logo">Bike Locator</div>
				<div class="nav-links">
					<a href="index.html">Home</a>
					<a href="about-us.html">About Us</a>
					<div class="dropdown">
						<button class="dropbtn">Filter</button>
						<div class="dropdown-content">						
							<a href="#">Option 1</a>
							<a href="#">Option 2</a>
							<a href="#">Option 3</a>
						</div>
					</div>
				</div>
				<div class="search-bar">
					<input type="text" placeholder="Search..."/>
					<button type="button">&#128269;</button>
				</div>
				<div class="user-account">
					<button class="account-btn">Account</button>
				</div>
				<div class="menu-icon">&#9776;</div>
			</div>
        </nav>

        <main>
			<div class="content">
				<h1>Bike Rack Locator</h1>
				<p>Find the nearest bike racks and contribute by adding new locations!</p>

				<div class="map-placeholder" id="map">
					<iframe title="Map Placeholder"></iframe>
				</div>

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
      </body>
    </div>
  );
}

export default App;
