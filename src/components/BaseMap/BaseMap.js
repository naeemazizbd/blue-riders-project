import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./BaseMap.css";

const BaseMap = () => {
    mapboxgl.accessToken =
        "pk.eyJ1IjoibmFlZW1heml6IiwiYSI6ImNrbWdnYWxwYTNmY2cycWp4ZGRkZWdmYTIifQ.20TYnjR027MimYkE9zfCyQ"
    useEffect(() => {
        new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 30],
            zoom: 2,
        });
    }, []);

    return <div className="h-100 w-100">
        <div id="mapContainer" className=" p-5 map"></div>
    </div>;
};

export default BaseMap;