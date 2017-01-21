     var map;
      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          draggable:true,
          title:"Drag Me!"
        });
      }
      var IT = {lat: -25.363, lng: 131.044};

function addmarker(latilongi) {
    var marker = new google.maps.Marker({
        position: latilongi,
        title: 'new marker',
        draggable: true,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<div id="infodiv2">infowindow!</div>'
    });
    map.setCenter(marker.getPosition())
}
