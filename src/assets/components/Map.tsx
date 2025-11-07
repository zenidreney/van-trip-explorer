import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
//import "leaflet-routing-machine";
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useLocation } from "../hooks/useLocation";


type MapProps = {
    long: string | null
    lat: string | null
}

function MapCenter({ lat, long }: MapProps) {

    const map = useMap()

    useEffect(() => {
        if(lat && long) {
            const center : [number, number] = [parseFloat(lat), parseFloat(long)]
            map.setView(center, map.getZoom())
        }
    }, [lat, long, map])

    return null
}

export default function Map() {

    const { startLocation, endLocation } = useLocation()
    const { location: startLoc, lat: startLat, long: startLong } = startLocation
    const { location: endLoc, lat: endLat, long: endLong } = endLocation

    console.log(startLoc, startLat, startLong, endLoc, endLat, endLong)

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

                <MapCenter lat={startLat} long={startLong} />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Choose a Location <br /> Start the journey!
                    </Popup>
                </Marker>
            </MapContainer>
        </>

    )
}