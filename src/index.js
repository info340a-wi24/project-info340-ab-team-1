import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import LOCATIONS from './data/locations.geojson';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI9b_vxobodkZJsq2QcHT2xTF7DF9qXu8",
  authDomain: "bike-locator-info340.firebaseapp.com",
  projectId: "bike-locator-info340",
  storageBucket: "bike-locator-info340.appspot.com",
  messagingSenderId: "10640855230",
  appId: "1:10640855230:web:d4177df4457c77b5f08eef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App locations={LOCATIONS}/>
  </BrowserRouter>
);

