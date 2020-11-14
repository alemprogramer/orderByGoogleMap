/**
 *Receiving the value of text box and type done conversion by Number() 
 */
var latitude = Number(document.getElementById("la").value);
var longitude = Number(document.getElementById("lo").value);

function initMap() {
    /**
     *Passing the value of variable received from text box
     **/
 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
         position => {
                console.log(position.coords.latitude,position.coords.longitude)
  
    var uluru = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        disableDoubleClickZoom: false,
        zoomControlOptions: true,
        streetViewControl: true,
        scaleControl: true,
        rotateControl: true,
        // mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        center: uluru,
        
    });



    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: uluru,
        scaleControl: true,
        rotateControl: true,
        


    });
    google.maps.event.addListener(marker, window, 'load','dragend',
        function (marker) {
            var latLng = marker.latLng;
            currentLatitude = latLng.lat();
            currentLongitude = latLng.lng();
            console.log(currentLatitude);
            console.log(currentLongitude);
            $("#la").val(currentLatitude);
            $("#lo").val(currentLongitude);
        }
    );
},showError)
}else{
    alert("Geolocation is not supported by this browser.");
}

function showError(error) {
    switch(error.code) {
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

