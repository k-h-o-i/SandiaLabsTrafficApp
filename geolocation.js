$(document).ready(function () {
  //geolocationPage
  var x = document.getElementById("geoLocation");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude; 
  }

  $('#getGeolocation').on('click', function(){
    console.log("#getGelocation clicked");
    getLocation();
  });

  //map page
  var y = document.getElementById("map-canvas");
  var mapLatitude;
  var mapLongitude;
  var SandiaLabs;

  function getMapLocation() {
    console.log("getMapLocation");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showMapPosition);
    } else {
      y.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showMapPosition(position) {
    console.log("showMapPosition");
    mapLatitude = 35.049287;
    mapLongitude = -106.542320;
    SandiaLabs = new google.maps.LatLng(mapLatitude,mapLongitude);
    getMap();
  }

  function getMap() {
    console.log("getMap");
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(mapLatitude, mapLongitude)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
                              mapOptions);
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);    
    var marker = new google.maps.Marker({
      position: SandiaLabs,
      map: map,
      title:"Sandia Labs"
    });
  }

  $( document ).on( "pageshow", "#mapPage", function( event ) {
    getMapLocation();
  });

  //directionsPage
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var directionsMap;
  var z = document.getElementById("directions-canvas");
  var start;
  var end;

  function getDirectionsLocation() {
    console.log("getDirectionsLocation");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showDirectionsPosition);
    } else {
      z.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showDirectionsPosition(position) {
    console.log("showDirectionsPosition");
    directionsLatitude = position.coords.latitude;
    directionsLongitude = position.coords.longitude;
    directionsLatLng = new google.maps.LatLng(directionsLatitude,directionsLongitude);
    getDirections();
  }

  function getDirections() {
    console.log('getDirections');
    directionsDisplay = new google.maps.DirectionsRenderer();
    //start = new google.maps.LatLng(directionsLatLng);
    var directionsOptions = {
      zoom:12,
      center: start
    }
    directionsMap = new google.maps.Map(document.getElementById("directions-canvas"), directionsOptions);
    directionsDisplay.setMap(directionsMap);
    calcRoute();
  }

  function calcRoute() {
    console.log("calcRoute");
    start = directionsLatLng;
    end = "1515 Eubank Blvd SE, Albuquerque, NM 87123";
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result);
      }
    });
  }

  $( document ).on( "pageshow", "#directionsPage", function( event ) {
    getDirectionsLocation();

    //traveltimespage
    var w = document.getElementById(travelTimes);
    var origin1 = directionsLatLng;
    var Carlislse = new google.maps.LatLng(35.055230, -106.604314);
    var Truman = new google.maps.LatLng(35.057476, -106.588603);
    var Gibson = new google.maps.LatLng(35.058033, -106.561149);
    var Wyoming = new google.maps.LatLng(35.048843, -106.550587);
    var Eubank = new google.maps.LatLng(35.054138, -106.533598 );

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [Carlislse, Truman, Gibson, Wyoming, Eubank],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    }, callback);

    function callback(response, status) {
      if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        for (var i = 0; i < origins.length; i++) {
          var results = response.rows[i].elements;
          for (var j = 0; j < results.length; j++) {
            var element = results[j];
            var distance = element.distance.text;
            var duration = element.duration.text;
            var from = origins[i];
            var to = destinations[j];
          }
        }
      }
    }
  })

  function getTravelTimes() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      w.innerHTML = "Geolocation is not supported by this browser.";
    }
    function showDurations() {
      w.innerHTML = "Carlisle: " + duration.text+ 
        "<br>Longitude: " + position.coords.longitude; 
    }
  }

  $('#getTravelTimes').on('click', function() {
    console.log("#getTravelTimes clicked");
    getTravelTimes();
  });
})
