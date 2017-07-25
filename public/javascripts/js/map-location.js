function initialize() {
  var address = "Santee Convention Center, 1737 Bass Dr, Santee, SC 29142";
  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(33.472988, -80.486098);
  var myOptions = {
    zoom: 10,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), myOptions);


  if (geocoder) {
    geocoder.geocode(
      {
        'address': address
      },
      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
            // alert(results[0].geometry.location);
            map.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow(
              {
                content: '<b>' + address + '</b>',
                size: new google.maps.Size(150,50)
              }
            );

            var marker = new google.maps.Marker(
              {
                position: results[0].geometry.location,
                map: map,
                title: address
              }
            );

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });

          }
          else {
            alert("No results found");
          }
        }
        else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      }
    );
  }
}
