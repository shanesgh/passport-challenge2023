"use client";

import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

type locationMap = {
  popupMessage: string;
};

function LocationMap() {
  return (
    <MapContainer
      center={[10.64352, -61.36157]}
      zoom={18}
      scrollWheelZoom={false}
      className="mapSize z-30"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[10.64352, -61.36157]}>
        <Popup>
          TTPost Tunapuna <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LocationMap;
