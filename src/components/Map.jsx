import React, {useRef, useState, useEffect} from "react";
import mapboxgl from 'mapbox-gl'


export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.307);
    const [lat, setLat] = useState(47.655);
    const [zoom, setZoom] = useState(13.6);
    mapboxgl.accessToken='pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw'
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
        });
    return (
        <div style={{paddingBottom:"30px"}}>
            <div ref={mapContainer} style={{height:"400px"}}/>
        </div>
    )
}