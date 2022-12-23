import React, {useEffect, useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import  './Map.css'
import { useSelector, useDispatch } from 'react-redux'



export default function Map(events) {
    const mapContainer = useRef(null)
    const dispatch = useDispatch()
    
    const [map, setMap] = useState(null)
    const coordinates = useSelector(state => state.booking.coords)
    const {isNewRoute} = useSelector(state => state.booking)
      
    const route_id = 'route';


    const drawRoute = (map, coordinates) => {
        
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: route_id,
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};
    
    
    useEffect(() => {
        
        if (map) {
            try {

                drawRoute(map, coordinates)
                
            } catch (error) {
                console.log(error)
            }
        }
                    
    }, [coordinates])
      
    useEffect(() => {
        
        if (isNewRoute) {
            try {

               map.removeLayer(route_id)
                
            } catch (error) {
                console.log(error)
            }
        }
                    
    }, [coordinates])
    


    
    useEffect(() => {
        
        mapboxgl.accessToken = 'pk.eyJ1IjoibWl6aWtvdmExOTgwIiwiYSI6ImNsYjR4ZG4yaDAxN2wzcnFmYnF6emV3MzAifQ.-LUFFkIPYb5fWYhArUMx-A';
        const map = new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [30.3056504, 59.9429126], // starting position [lng, lat]
            zoom: 10 // starting zoom
        });
        setMap(map)
        
       
        return () => {
            map.remove()
        }
    }, [])
    
    
    
    return (
       
            <div className='Map'>
                <div className='Map-app' ref={mapContainer}></div>
               
            </div>
           
    )
}