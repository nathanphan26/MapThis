     //var map;
     //initMap();
      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
       var  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          draggable:true,
          title:"Drag Me!"
        });

        google.maps.event.addListener(map, 'rightclick', function(event){
        var marker = new google.maps.Marker({
                position: event.latLng,
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP
        });
});
      }



