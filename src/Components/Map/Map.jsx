import React, {useEffect, useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import  './Map.css'
import { useSelector } from 'react-redux'
import {drawRoute} from './drawRoute'


export default function Map(events) {
    const state = useSelector (state => state)
    const mapContainer = useRef(null)
    
    const [map, setMap] = useState(null)
    const coordinates = useSelector(state => state.booking.coords)
    
    
    useEffect(() => {
        
        if (map) {
            try {
                drawRoute(map, coordinates)
            } catch (error) {
                console.log(error)
            }
        }
    
    }, [map, coordinates])
    
    
    
    
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
    }, [state])
    
    
    
    return (
       
            <div className='Map'>
                <div className='Map-app' ref={mapContainer}></div>
               
            </div>
           
    )
}