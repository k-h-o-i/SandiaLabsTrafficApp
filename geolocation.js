$(document).ready(function () {

  //traveltimespage
  var Carlisle = new google.maps.LatLng(35.055230, -106.604314);
  var Truman = new google.maps.LatLng(35.057476, -106.588603);
  var Gibson = new google.maps.LatLng(35.058033, -106.561149);
  var Wyoming = new google.maps.LatLng(35.048843, -106.550587);
  var Eubank = new google.maps.LatLng(35.054138, -106.533598 );

  var write1 = document.getElementById("Carlisle");
  var write2 = document.getElementById("Truman");
  var write3 = document.getElementById("Gibson");
  var write4 = document.getElementById("Wyoming");
  var write5 = document.getElementById("Eubank");
  var travelTimeBox = document.getElementById('travelTimeBox');

  function log () {
    var args = ['[' + (new Date()).toISOString() + '] '];
    for (var i in arguments) {
      args.push(arguments[i]);
    }
    console.log(...args);
  }

  function getTravelTimes() {
    log('getTravelTimes() called');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      w.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  var gates = [
    {name: "Carlisle", url: "https://www.google.com/maps/dir//35.055230,+-106.604314/@35.0552152,-106.606515,17z/data=!4m6!4m5!1m0!1m3!2m2!1d-106.604314!2d35.05523"},
    {name: "Truman", url: "https://www.google.com/maps/dir//35.056025,-106.58981/@35.0771572,-106.6010017,14z"},
    {name: "Gibson", url: "https://www.google.com/maps/dir//35.058033,+-106.561149/@35.0581568,-106.5958993,13z/data=!4m6!4m5!1m0!1m3!2m2!1d-106.561149!2d35.058033"},
    {name: "Wyoming", url: "https://www.google.com/maps/dir//35.048843,+-106.550587+/@35.0505511,-106.5520711,17z/data=!4m6!4m5!1m0!1m3!2m2!1d-106.550587!2d35.048843"},
    {name: "Eubank", url: "https://www.google.com/maps/dir//35.054138,+-106.533598+/@35.0541587,-106.5683305,13z/data=!4m6!4m5!1m0!1m3!2m2!1d-106.533598!2d35.054138"}
  ];

  function showPosition(position) {
    log('showPosition() called');
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var latlng = new google.maps.LatLng (lat, lng);

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
      origins: [latlng],
      destinations: [Carlisle, Truman, Gibson, Wyoming, Eubank],
      travelMode: 'DRIVING',
      drivingOptions: {
        departureTime: new Date(Date.now() + 0),  // for the time N milliseconds from now.
        trafficModel: 'bestguess'
      },
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    }, callback);

    function callback(response, status) {
      if (status == 'OK') {
        var origins = response.originAddresses;
        var destinations = response.destinationAddresses;

        var data = response.rows[0].elements
          /*
          .filter(element => {
            return element.duration_in_traffic.value < 1300;
          })
          // */
          .map((element, index) => {
            return {
              duration: element.duration_in_traffic,
              gate: gates[index]
            };
          });

        data.sort((a, b) => a.duration.value - b.duration.value);

        log('my-data:', data);

        travelTimeBox.innerHTML = data.map(record => {
          return '<div>' +
              '<a href="' +
              record.gate.url +
              '">' +
              record.gate.name +
              '</a>' +
              ': ' +
              record.duration.text +
            '</div>'
        }).join('');
      }
    }
  }

  $('#getTravelTimes').on('click', function(){
    console.log("#getTravelTimes Clicked");
    getTravelTimes();
  });

  //map page
  var y = document.getElementById("map-canvas");
  var mapLatitude;
  var mapLongitude;
  var userlocation;
  var Carlisle = new google.maps.LatLng(35.055230, -106.604314);
  var Truman = new google.maps.LatLng(35.057476, -106.588603);
  var Gibson = new google.maps.LatLng(35.058033, -106.561149);
  var Wyoming = new google.maps.LatLng(35.048843, -106.550587);
  var Eubank = new google.maps.LatLng(35.054138, -106.533598 );

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
    mapLatitude = position.coords.latitude;
    mapLongitude = position.coords.longitude;
    userlocation = new google.maps.LatLng(mapLatitude,mapLongitude);
    getMap();
  }

  function getMap() {
    console.log("getMap");
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng( 35.074210, -106.584101 )
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
                              mapOptions);
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);    
    var marker0 = new google.maps.Marker({
      position: userlocation,
      map: map,
      title:"You are here!",
      label:"You are Here!",
      icon: {
        url: "images/markers/svg/sports.svg",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    var marker1 = new google.maps.Marker({
      position: Carlisle,
      map: map,
      title:"Carlisle Gate",
      label:"Carlisle Gate",
      icon: {
        url: "images/markers/svg/little-flag.svg",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    var marker2 = new google.maps.Marker({
      position: Truman,
      map: map,
      title:"Truman Gate",
      label:"Truman Gate",
      icon: {
        url: "images/markers/svg/little-flag.svg",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    var marker3 = new google.maps.Marker({
      position: Wyoming,
      map: map,
      title:"Wyoming Gate",
      label: "Wyoming Gate",
      icon: {
        url: "images/markers/svg/little-flag.svg",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    var marker4 = new google.maps.Marker({
      position: Gibson,
      map: map,
      title:"Gibson Gate",
      label:"Gibson Gate",
      icon: {
        url: "images/markers/svg/little-flag.svg",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    var marker5 = new google.maps.Marker({
      position: Eubank,
      map: map,
      title:"Eubank Gate",
      label:"Eubank Gate",
      icon: {
        url: "images/markers/svg/little-flag.svg",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
  }

  $( document ).on( "pageshow", "#mapPage", function( event ) {
    getMapLocation();
  });
});
