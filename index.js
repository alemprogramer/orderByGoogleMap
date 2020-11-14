/**
 *Receiving the value of text box and type done conversion by Number() 
 */
var latitude = Number(document.getElementById("la").value);
var longitude = Number(document.getElementById("lo").value);

function initMap() {
    /**
     *Passing the value of variable received from text box
     **/
    navigator.geolocation.getCurrentPosition(
         position => {
                console.log(position.coords.latitude,position.coords.longitude)
  
    var uluru = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });



    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: uluru,
        scaleControl: true,
        rotateControl: true,

    }
        //   {
        //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        //     mapTypeControl: true,
        //     disableDoubleClickZoom: false,
        //     zoomControlOptions: true,
        //     streetViewControl: true,
        //     scaleControl: true,
        //     rotateControl: true,
        // },
    );
    google.maps.event.addListener(marker, 'dragend',
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
})
    
}