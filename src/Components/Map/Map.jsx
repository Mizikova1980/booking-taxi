import React, {useEffect, useRef} from 'react'
import mapboxgl from 'mapbox-gl'
import  './Map.css'


export default function Map(events) {
   
    const mapContainer = useRef(null)
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoibWl6aWtvdmExOTgwIiwiYSI6ImNsYjR4ZG4yaDAxN2wzcnFmYnF6emV3MzAifQ.-LUFFkIPYb5fWYhArUMx-A';
        const map = new mapboxgl.Map({
            container: mapContainer.current, // container ID
            style: 'mapbox://styles/mapbox/streets-v9', // style URL
            center: [30.3056504, 59.9429126], // starting position [lng, lat]
            zoom: 10 // starting zoom
        });

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
