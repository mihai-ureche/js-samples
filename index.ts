/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


// import points
import points from './points.json';


// Initialize and add the map
let map;
async function initMap(): Promise<void> {
  // The location of Uluru
  const position = { lat: 47.492764, lng: 27.3213593 };

  // Request needed libraries.
  //@ts-ignore
  const { Map, Polyline } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

  // The map, centered at Uluru
  map = new Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 10,
      center: position,
      mapId: 'DEMO_MAP_ID',
    }
  );




  // create path for this

  const path = points.map(point => {
    return {
      lng: point[0], lat: point[1]
    }
  });

  const polyline = new Polyline({
    path, 
    strokeColor: "red",
    map
  })




}

initMap();

export { };
