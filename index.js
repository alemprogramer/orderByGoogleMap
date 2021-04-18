function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position.coords.latitude, position.coords.longitude);

        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          disableDoubleClickZoom: false,
          zoomControlOptions: true,
          streetViewControl: true,
          scaleControl: true,
          rotateControl: true,
          // mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
          center: coords,

        });
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';//for maker change
        marker = new google.maps.Marker({
           map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          // icon: iconBase + 'library_maps.png',
          position: coords,
        });
        google.maps.event.addListener(marker, 'dragend',function (marker) {
            document.getElementById("la").value = marker.latLng.lat();
            document.getElementById("lo").value = marker.latLng.lng();
          });
      }, showError)
  } else {
    alert("Geolocation is not supported by this browser.");
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

}