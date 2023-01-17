// import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Map from './Component/Map';


function App() {
 
  return (
    <div>
      <Map/>
    </div>
    // <MapContainer  style={{width:"99vw" ,height: "99vh"}} center={[20.5937,78.9629]} zoom={6} scrollWheelZoom={true}>
    // <TileLayer
    //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    // />
    // {/* <Marker position={[51.505, -0.09]}>
    //   <Popup>
    //     A pretty CSS3 popup. <br /> Easily customizable.
    //   </Popup>
    // </Marker> */}
  //   <input style={{zIndex: 1000}} type={"text"} placeholder="Hello" />
  //   <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
  // </MapContainer>
  );
}

export default App;
