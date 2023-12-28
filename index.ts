/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */




// import points and rawPoints
import points from  "./data/points.json";
import rawPoints from "./data/rawPoints.json";

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 14,
      center: { lat: 47.4926779, lng: 27.3211863 },
      mapTypeId: "hybrid",
    }
  );

  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
 



  // show all points on map
  const path = points.map(point => {
    return {lat: point[1], lng: point[0]}
  })
  console.log(path)
  const flightPath = new google.maps.Polyline({
    map,
    path,
    geodesic: true,
    strokeColor: "red",
    strokeOpacity: 0.5,
    strokeWeight: 2,
  });



}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
