import React from "react";




export const drawRoute = (map, coordinates) => {
    const layerId = 'one'
    const getId = () => `route${ layerId }`;

    const id = getId();

    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    if(map.getLayer(id)){
        map.removeLayer(id);
    }

    layerId++;

    map.addLayer({
        id: getId(),
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