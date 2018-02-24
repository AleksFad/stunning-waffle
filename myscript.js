$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this).attr('href'),
            target = $(target);
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

function loadMap() {
var position = new google.maps.LatLng(59.437610, 24.756510);
var position1 = new google.maps.LatLng(59.437534, 24.756510);

var myStyle = [
       {
         featureType: "landscape.man_made",
         elementType: "all",
         stylers: [
           { 'color': '#000000' },
           { 'hue': '#ff00e6' },
           { 'lightness': 8}
         ]
       },{
         featureType: "poi",
         elementType: "labels",
         stylers: [
           { 'visibility': "off" }
         ]
       },{
         featureType: "water",
         elementType: "geometry.fill",
         stylers: [
           { 'color': "#001EFF" },
           { 'visibility': 'on'}
         ]
       },{
         featureType: "road",
         elementType: "labels",
         stylers: [
           { 'visibility': "on" }
         ]
       },{
         featureType: 'transit.station.bus',
         stylers: [
           { 'visibility': 'off'}
         ]
       },{
         featureType: 'transit.station.rail',
         stylers: [
           { 'visibility': 'off'}
         ]
       },{
         featureType: 'road.highway',
         elementType: 'all',
         stylers: [
            { "color": "#808080" },
            { "lightness": 60 },
            { "weight": 4.2 }
         ]
       },{
         featureType: 'road.arterial',
         elementType: 'all',
         stylers: [
            { "color": "#808080" },
            { "lightness": 10},
            { "weight": 2.9 }
         ]
       },{
         featureType: 'road.local',
         elementType: 'all',
         stylers: [
            { "color": "#808080" },
            { "lightness": 10 },
            { "weight": 2.9 }
         ]
       },{
         featureType: 'poi',
         elementType: 'geometry.fill',
         stylers: [
            { "color": "#808080" },
            { "lightness": 10 },
            { "visibility": 'on' }
         ]
       },{
         featureType: "road",
         elementType: "labels.text",
         stylers: [
            { 'color': '#ffffff' },
            {'visibility': 'on' },
            { "weight": 0.4 }
         ]
       },{
         featureType: "transit.line",
         elementType: "geometry.fill",
         stylers: [
            {'visibility': 'off' }
         ]
       }
     ];
     var map = new google.maps.Map(document.getElementById('sample'), {
       mapTypeControlOptions: {
         mapTypeIds: ['mystyle', google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
       },
       center: new google.maps.LatLng(59.438297, 24.761392),
       zoom: 16,
       mapTypeId: 'mystyle'
     });

     map.mapTypes.set('mystyle', new google.maps.StyledMapType(myStyle, { name: 'My Style' }));
     var image = 'images/ftznak.png'
     var Marker = new google.maps.Marker({
     position:position,
     map:map,
     icon:image
     });

     var image1 = 'images/ftznak1.png'
     var Marker = new google.maps.Marker({
     position:position1,
     map:map,
     icon:image1
     });
}



