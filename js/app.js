// La funcionalidad de tu proyecto
var origin = document.getElementById('start');
var destiny = document.getElementById('end');

function mapInit() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  autocomplete();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {lat:  -19.8157,
      lng:  -43.9542}
  });
  directionsDisplay.setMap(map);

  var changeHandler = function() {
    calculateRoute(directionsService, directionsDisplay);
  };
  document.getElementById('search').addEventListener('click', changeHandler);
}

function calculateRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: origin.value,
    destination: destiny.value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Ingrese direcciones');
    }
  });
}

function autocomplete() {
  let autocompleteorigin = new google.maps.places.Autocomplete(origin);
  let autocompleteDestiny = new google.maps.places.Autocomplete(destiny);
}
