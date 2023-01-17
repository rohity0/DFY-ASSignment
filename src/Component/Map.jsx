import React, { useState } from 'react';
import { TileLayer, TiffLayer, GeoJSON, MapContainer, useMap } from 'react-leaflet';
import Cropper from 'react-image-crop';
import 'leaflet/dist/leaflet.css';
import { HandleInput } from './Input';

const Map = () => {
  const [geojsonData, setGeoJSONData] = useState(null);
  const [bounds, setBounds] = useState(null);

  const handleFileInput = (event) => {
    setGeoJSONData(null);
    const file = event.target.files[0];
      let x=  file.name.split('.').pop()
      if (x !== 'geojson') {
      alert('Please select a valid GeoJSON file.');
      return;
     }
  

    const reader = new FileReader();
      reader.onload = (e) => {
        const jsonData = JSON.parse(e.target.result);
        setGeoJSONData(jsonData);
        setBounds(jsonData.bounds);
      };
    reader.readAsText(file);
  
  }

  return (
   <>
   <div>
   <input style={{ border: "1px solid red", zIndex:1000}} type="file" onChange={handleFileInput} accept=".geojson" />
   </div>
    <MapContainer  style={{width:"100vw"  ,height:"550px"}}  center={[20.5937,  78.9629]} zoom={6}>
      <TileLayer
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geojsonData && <GeoJSON fitBounds={geojsonData} 
      style={{color: "red" , fillColor: "red", fillOpacity:1 }}
       data={geojsonData} zoom={13}  
       
       />}
    </MapContainer>

    </>
  );
};

export default Map;