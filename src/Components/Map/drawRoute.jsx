import React from "react";


const route_id = 'route';


export const drawRoute = (map, coordinates) => {

    console.log(map, coordinates)

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