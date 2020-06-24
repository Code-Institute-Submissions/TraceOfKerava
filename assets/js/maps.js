 function initMap() {
    var greenIcon = {
      url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
  };

var locationGrocery = new google.maps.LatLng(60.402021, 25.103446);
var locationCafe = new google.maps.LatLng(60.403215, 25.100615);
var locationLibrary = new google.maps.LatLng(60.405517, 25.103234);
var locationThrift = new google.maps.LatLng(60.399349, 25.109210);
var locationStables = new google.maps.LatLng(60.389244, 25.143916);
var locationCricket = new google.maps.LatLng(60.391385, 25.116280);
var locationManor = new google.maps.LatLng(60.410199, 25.119487);
var locationNature = new google.maps.LatLng(60.423293974, 25.143761878);

$("#grocery").click(function () {
 var mapOptionsGrocery = {
 zoom: 16,
 center: locationGrocery,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };

 var mapGrocery = new google.maps.Map(document.getElementById("grocery"), mapOptionsGrocery);

 var markerGrocery = new google.maps.Marker({
 position: locationGrocery,
 map: mapGrocery,
 icon: greenIcon,
 title: "Prisma Kerava, Kauppakaari 2, 04200 Kerava"
 })
})

$("#cafe").click(function () {
 var mapOptionsCafe = {
 zoom: 16,
 center: locationCafe,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };

 var mapCafe = new google.maps.Map(document.getElementById("cafe"), mapOptionsCafe);

 var markerCafe = new google.maps.Marker({
 position: locationCafe,
 map: mapCafe,
 icon: greenIcon,
 title: "Kulmakonditoria, Kauppakaari 8, 04200 Kerava"
 })
})

$("#library").click(function () {
 var mapOptionsLibrary = {
 zoom: 16,
 center: locationLibrary,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };

 var mapLibrary = new google.maps.Map(document.getElementById("library"), mapOptionsLibrary);

 var markerLibrary = new google.maps.Marker({
 position: locationLibrary,
 map: mapLibrary,
 icon: greenIcon,
 title: "Keravan kaupunginkirjasto, Paasikivenkatu 12, 04200 Kerava"
 })
})

$("#thrift").click(function () {
 var mapOptionsThrift = {
 zoom: 16,
 center: locationThrift,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };

 var mapThrift = new google.maps.Map(document.getElementById("thrift"), mapOptionsThrift);

 var markerThrift = new google.maps.Marker({
 position: locationThrift,
 map: mapThrift,
 icon: greenIcon,
 title: "Fida Kerava, Santaniitynkatu 9, 04250 Kerava"
 })
})

$("#stables").click(function () {
 var mapOptionsStables = {
 zoom: 16,
 center: locationStables,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };
 
 var mapStables = new google.maps.Map(document.getElementById("stables"), mapOptionsStables);

 var markerStables = new google.maps.Marker({
 position: locationStables,
 map: mapStables,
 icon: greenIcon,
 title: "Keravan Ratsastuskoulu, Levonmäentie 22, 04220 Kerava"
 })
})

$("#cricket").click(function () {
 var mapOptionsCricket = {
 zoom: 16,
 center: locationCricket,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };
 
 var mapCricket = new google.maps.Map(document.getElementById("cricket"), mapOptionsCricket);

 var markerCricket = new google.maps.Marker({
 position: locationCricket,
 map: mapCricket,
 icon: greenIcon,
 title: "Kettulankuja 8, 04250 Kerava, Finland"
 })
})

$("#manor").click(function () {
 var mapOptionsManor = {
 zoom: 16,
 center: locationManor,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };
 
 var mapManor = new google.maps.Map(document.getElementById("manor"), mapOptionsManor);

 var markerManor = new google.maps.Marker({
 position: locationManor,
 map: mapManor,
 icon: greenIcon,
 title: "Keravan Kartano, Kivisillantie 12, 04200 Kerava"
 })
})

$("#nature").click(function () {
 var mapOptionsNature = {
 zoom: 15,
 center: locationNature,
 mapTypeId: google.maps.MapTypeId.ROADMAP,
 mapTypeControl: 0
 };
 
 var mapNature = new google.maps.Map(document.getElementById("nature"), mapOptionsNature);

 var markerNature = new google.maps.Marker({
 position: locationNature,
 map: mapNature,
 icon: greenIcon,
 title: "Haukkavuori pysäköinti, Kaskelantie 178, 04220 Kerava"
 }); 
});
}