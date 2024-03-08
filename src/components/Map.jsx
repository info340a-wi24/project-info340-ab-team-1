import React, {useRef, useState, useEffect} from "react";
import mapboxgl from 'mapbox-gl'


export default function Map(props) {
    //let locations = props.locations;
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-122.308);
    const [lat, setLat] = useState(47.655);
    const [zoom, setZoom] = useState(14.3);
    const [bikeLocations, setBikeLocations] = useState([]);
    const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
    });

    useEffect(() => {
        if(props.locations){
            let newLocations = []
            props.locations.forEach((row) => {
                const newLoc = `{"type":"Feature","properties":{"name":"${row.val().locationName}","type":"${row.val().type}"},"geometry":{"type":"Point","coordinates":[${row.val().latitude},${row.val().longitude}]}}`
                newLocations.push(newLoc)
            })
            setBikeLocations(newLocations)
            console.log(bikeLocations)
        }
    }, [props.locations])




    mapboxgl.accessToken='pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
    
        map.current.on('load', () => {
            map.current.addSource('locations', {
                type: 'geojson',
                data: {
                    "type": "FeatureCollection",
                    "features": JSON.parse(`[${bikeLocations}]`)
                }
            });

            map.current.addLayer({
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

        map.current.on('mouseenter', 'locations_layer', (point) => {
            map.current.getCanvas().style.cursor = 'pointer';

            const coordinates = point.features[0].geometry.coordinates.slice();
            const locked = point.features[0].properties.locked;

            while (Math.abs(point.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += point.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            popup.setLngLat(coordinates).setHTML("Locked: " + locked).addTo(map.current);
        });

        map.current.on('mouseleave', 'locations_layer', () => {
            map.current.getCanvas().style.cursor = '';
            popup.remove();
        });
    }, []);

    useEffect(() => {
        if(map.current.getSource('locations')){           
            const source = map.current.getSource('locations')
            source.setData({
                "type": "FeatureCollection",
                "features": JSON.parse(`[${bikeLocations}]`)
                })
        }

    }, [bikeLocations])

    const position = [51.505, -0.09]

    return (
        <>
        <div style={{paddingBottom:"30px"}}>
            <div ref={mapContainer} style={{height:"400px"}}/>
        </div>
        </>
    )
}