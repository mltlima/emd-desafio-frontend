import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../styles/Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null); // Create a ref to store the map instance
  const [opacity, setOpacity] = useState(1); // Add state to control opacity

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-43.206499174, -22.950996196],
      zoom: 10,
      interactive: false,
    });

    const onScroll = (e) => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newZoom = Math.min(14, 10 + scrollTop / 200);
      const newOpacity = Math.max(0, 1 - scrollTop / 600);

      map.current.setZoom(newZoom);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      map.current.remove(); // use the map instance from the ref
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div className="map-container" ref={mapContainer} style={{ opacity, position: 'fixed' }} />;
}

export default Map;
