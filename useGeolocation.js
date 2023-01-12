import { useState, useEffect } from 'react';

function useGeolocation() {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const watcher = navigator.geolocation.watchPosition(
      pos => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      },
      error => {
        setError(error);
      }
    );

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return { location, error };
}
