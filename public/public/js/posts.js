const withAuth = require("../../utils/auth");

function addMarker(position, map) {
  const marker = new google.maps.Marker({
    position,
    map,
  });
}

async function initMap() {
  const options = { lat: 33.7175, lng: -117.8311 };

  //New Map
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: options,
  });

  const marker = new google.maps.Marker({
    position: options,
    map: map,
  });

  const gardens = await getGardens()

  gardens.forEach(garden => {
    addMarker({lat: garden.latitude, lng: garden.longitude}, map)
  });

  //Listen for click on map location
  // google.maps.event.addListener(map, "click", (event) => 
  //   addMarker(event.latLng, map)
  // )

}
  
function getGardens() {
  return fetch('/api/gardens').then(data => data.json());
}