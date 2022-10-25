mapboxgl.accessToken = 'pk.eyJ1IjoiamRvbWFzdGVyczE3IiwiYSI6ImNsOW0yMmV1NDB5c2IzdXBiMnJ2MXV6a2cifQ.9uID0nAntS34EqQQB6Awbg';

let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-117.381249, 47.666524],
  zoom: 13.5,
});

const marker = new mapboxgl.Marker();
marker.setLngLat([-117.358486, 47.673093]);
marker.addTo(map);


/*async function busData() {
  let url = 'https://gtfsbridge.spokanetransit.com/vehicles';
  const res = await fetch(url);
  const data = await res.text();
  console.log(data);
  return data;
}*/

let stopPins = [
  {
    StopName: 'SCC Transit Center Bay 3',
    StopNo: 4377,
    Longitude: -117.358486,
    Latitude: 47.673093,
  },
  {
    StopName: 'Mission @ Regal',
    StopNo: 3081,
    Longitude: -117.367566,
    Latitude: 47.671909,
  },
  {
    StopName: 'Mission @ Lacey',
    StopNo: 3082,
    Longitude: -117.371057,
    Latitude: 47.671902,
  },
  {
    StopName: 'Mission @ Cook',
    StopNo: 3083,
    Longitude: -117.373794,
    Latitude: 47.671939,
  },
  {
    StopName: 'Mission @ Stone',
    StopNo: 3084,
    Longitude: -117.376557,
    Latitude: 47.671913,
  },
  {
    StopName: 'Mission @ Crestline',
    StopNo: 3085,
    Longitude: -117.380048,
    Latitude: 47.671924,
  },
  {
    StopName: 'Napa @ Sinto',
    StopNo: 1937,
    Longitude: -117.381226,
    Latitude: 47.67072,
  },
  {
    StopName: 'Napa @ Boone',
    StopNo: 1938,
    Longitude: -117.381241,
    Latitude: 47.668636,
  },
  {
    StopName: 'Napa @ Cataldo',
    StopNo: 1939,
    Longitude: -117.381256,
    Latitude: 47.66658,
  },
  {
    StopName: 'Napa @ Springfield',
    StopNo: 1941,
    Longitude: -117.381285,
    Latitude: 47.663293,
  },
  {
    StopName: 'Trent @ E 1800',
    StopNo: 1942,
    Longitude: -117.384036,
    Latitude: 47.66198,
  },
  {
    StopName: 'Trent @ Helena',
    StopNo: 1943,
    Longitude: -117.387116,
    Latitude: 47.661927,
  },
  {
    StopName: 'MLK @ Front',
    StopNo: 4392,
    Longitude: -117.390855,
    Latitude: 47.661031,
  },
  {
    StopName: 'MLK @ Erie',
    StopNo: 4393,
    Longitude: -117.394531,
    Latitude: 47.659359,
  },
  {
    StopName: 'Spokane Falls Blvd @ WSU/EWU Spokane',
    StopNo: 4159,
    Longitude: -117.40779,
    Latitude: 47.66029,
  },
  {
    StopName: 'Pine @ Main',
    StopNo: 4275,
    Longitude: -117.409308,
    Latitude: 47.659175,
  },
  {
    StopName: 'Riverside @ Browne',
    StopNo: 4276,
    Longitude: -117.413542,
    Latitude: 47.658051,
  },
  {
    StopName: 'Plaza Bay 8',
    StopNo: 4573,
    Longitude: -117.422231,
    Latitude: 47.657608,
  },
];

function addPins(){
  for(let i = 0; i < stopPins.length; i++){
    let marker = new mapboxgl.Marker();
    marker.setLngLat([stopPins[i].Longitude, stopPins[i].Latitude]);
    marker.addTo(map);
  };
};

addPins();