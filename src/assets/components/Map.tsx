import "leaflet/dist/leaflet.css";
//import "leaflet-routing-machine";
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'








export default function Map() {

    


    const mapStyle = {
        height: "400px",
        width: "100%",
    }

    return (
        <>
     
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={mapStyle}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Choose a Location <br /> Start the journey!
                    </Popup>
                </Marker>
            </MapContainer>

        </>

    )
}