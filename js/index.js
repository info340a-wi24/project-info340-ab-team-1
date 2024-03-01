'use strict';

mapboxgl.accessToken =
    'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 14.3,
    center: [-122.308, 47.655]
});

async function geojsonFetch() {
    let response = await fetch('src/data/locations.geojson');
    let locations = await response.json();

    map.on('load', function loadingData() {
        map.addSource('locations', {
            type: 'geojson',
            data: locations
        });

        map.addLayer({
            'id': 'locations_layer',
            'type': 'circle',
            'source': 'locations',
            'paint': {
                'circle-radius': 8,
                'circle-stroke-width': 2,
                'circle-color': '#67d339',
                'circle-stroke-color': 'white'
            }
        });
    });
}

geojsonFetch();


document.addEventListener('DOMContentLoaded', function() {
    var loginFormPopup = document.getElementById('loginFormPopup');
    var signupFormPopup = document.getElementById('signupFormPopup');
    var accountButton = document.querySelector(".user-account button");
    var openSignupFromLogin = document.getElementById("openSignupFromLogin");
    var openLoginFromSignup = document.getElementById("openLoginFromSignup");
    var closeLoginForm = document.getElementById("closeLoginForm");
    var closeSignupForm = document.getElementById("closeSignupForm");

    accountButton.addEventListener('click', function() {
        if (loginFormPopup.style.display === "block") {
            loginFormPopup.style.display = "none";
        } else {
            loginFormPopup.style.display = "block";
            signupFormPopup.style.display = "none";
        }
    });

    openSignupFromLogin.addEventListener('click', function() {
        loginFormPopup.style.display = "none";
        signupFormPopup.style.display = "block";
    });

    openLoginFromSignup.addEventListener('click', function() {
        signupFormPopup.style.display = "none";
        loginFormPopup.style.display = "block";
    });

    closeLoginForm.addEventListener('click', function() {
        loginFormPopup.style.display = "none";
    });

    closeSignupForm.addEventListener('click', function() {
        signupFormPopup.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == loginFormPopup) {
            loginFormPopup.style.display = "none";
        }
        if (event.target == signupFormPopup) {
            signupFormPopup.style.display = "none";
        }
    });
});
