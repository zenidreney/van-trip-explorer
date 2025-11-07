import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
//import "leaflet-routing-machine";
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'


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

export default function Map({ long, lat }: MapProps) {

    //console.log(lat, long)

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

                <MapCenter long={long} lat={lat} />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        Choose a Location <br /> Start the journey!
                    </Popup>
                </Marker>
            </MapContainer>
        </>

    )
}