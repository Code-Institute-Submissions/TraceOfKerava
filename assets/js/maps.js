function initMap() {
    // Map options
    var options = {
        zoom: 13,
        center: {lat:60.405539, lng:25.103213}
    }
    // New map
    var map = new google.maps.Map(document.getElementById("map"), options);
    // Add markers
   addMarker({coordinates:{lat:60.405539, lng:25.103213}});
   addMarker({coordinates:{lat:60.403237, lng:25.100621}});
   addMarker({coordinates:{lat:60.402094, lng:25.103420}});

   // Add Marker Function
   function addMarker(props){
        var marker = new google.maps.Marker({
        position:props.coordinates,
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale:2
        },
        map:map
        })
    }
}