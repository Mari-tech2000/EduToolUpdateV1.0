import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Geolocation() {
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Fetch location name using reverse geocoding
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyDjMood1_pJdvKK9joIxLwjfM96s3is4OM`
            );
            const data = response.data;
            if (data.results && data.results.length > 0) {
              const { formatted_address } = data.results[0];
              setLocationName(formatted_address);
            } else {
              setLocationName('Location not found');
            }
          } catch (error) {
            console.error('Error fetching location:', error);
            setLocationName('Error fetching location');
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
          setLocationName('Error getting user location');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLocationName('Geolocation is not supported');
    }
  }, []);

  return <p style={{marginLeft:"50%",fontSize:"0px"}}>Location: {locationName}</p>;
}

export default Geolocation;