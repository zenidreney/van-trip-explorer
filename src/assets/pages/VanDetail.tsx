import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"

//import L from "leaflet";
import "leaflet/dist/leaflet.css";
//import "leaflet-routing-machine";
//import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


export default function VanDetail() {


    const { vanId } = useParams()
    //console.log(typeof vanId, vanId)
    const { van, loading, error } = useVan(vanId)
    // console.log("loading: ", loading, "error: ", error)





    if (loading) {
        return <p>Loading</p>
    }

    if (error) {
        return <p>Error</p>
    }
    if (!van) {
        return <p>No such Van.</p>
    }

    const { description, imageUrl } = van
    const mapStyle = {
        height: "400px",
        width: "100%",
        marginBottom: "1rem"
    }

    return (

        <div className="van-datail-container">

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



            <p>I am VanDetail</p>
            <p>{description} </p>
            <img src={imageUrl} />

        </div>

    )
}

