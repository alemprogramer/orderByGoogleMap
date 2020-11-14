function initMap() {
  let lat;
    const myLatlng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatlng,
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: myLatlng,
    });
    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
        // lat=mapsMouseEvent.latLng
      });
      console.log(lat);
      console.log(infoWindow.position);
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      infoWindow.open(map);
    });
    google.maps.event.addListener(map, 'click', function(event) {

      marker = new google.maps.Marker({position: event.latLng, map: map});
      alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
    
    });
  }
