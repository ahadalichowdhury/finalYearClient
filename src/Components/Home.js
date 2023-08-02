import React, { useEffect, useRef, useState } from 'react';

function Home() {
  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMap = initGoogleMap();
    setMap(googleMap);
  }, []);

  useEffect(() => {
    if (!map) return;

    var directionsService = new window.google.maps.DirectionsService();
    var directionsRenderer = new window.google.maps.DirectionsRenderer();
    var haight = new window.google.maps.LatLng(37.7699298, -122.4469157);
    var oceanBeach = new window.google.maps.LatLng(37.7683909618184, -122.51089453697205);
    var request = {
      origin: haight,
      destination: oceanBeach,
      travelMode: 'WALKING'
    };
    directionsService.route(request, function (response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
      } else {
        console.error('Directions request failed:', status);
      }
    });
  }, [map]);

  const initGoogleMap = () => {
    const mapOptions = {
      center: new window.google.maps.LatLng(37.7699298, -122.4469157),
      zoom: 8
    };
    return new window.google.maps.Map(googleMapRef.current, mapOptions);
  }

  return (
    <div>
      <div
        ref={googleMapRef}
        style={{ width: '100%', height: '400px' }} // Adjust the size to your preference
      />
    </div>
  );
}

export default Home;
