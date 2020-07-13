/* eslint-disable */

export const displayMap = locations => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiZXJ0dXNiYXNrYXlhIiwiYSI6ImNrYnY4Z3p5dzAzbHkyemxkd2xyaGd6NjQifQ.0-fRyfBeWZmGlv6FqiZ3fA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ertusbaskaya/ckbv8meag10qk1io0pqa6b3hs',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day }: ${loc.description}</p>`).addTo(map);

    bounds.extend(loc.coordinates);
  });

map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
      }
  });
};
