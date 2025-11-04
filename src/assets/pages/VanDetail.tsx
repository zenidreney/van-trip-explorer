import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import Map from "../components/Map"
import Button from 'react-bootstrap/Button';

import { getCoordinates } from "../../utils/getCoordinates";

import { useEffect } from "react";
import { useLocation } from "../hooks/useLocation";


import "./VanDetail.css"

export default function VanDetail() {

    const { startLocation, setStartLocation } = useLocation()

    async function handleStartButton() {
        const { name, latitude, longitude } = await getCoordinates("barcelona")
        //console.log(name, longitude, latitude)
        setStartLocation({
            location: name,
            lat: latitude,
            long: longitude
        })

    }

    useEffect(() => {
        const { location, lat, long } = startLocation

        console.log("City:", location, "longitude", long, "latitude", lat);
    }, [startLocation]);

    const { location, lat, long } = startLocation

    console.log("2nd console", location, lat, long)




    const { vanId } = useParams()
    //console.log(typeof vanId, vanId)
    const { van, loading, error } = useVan(vanId)
    // console.log("loading: ", loading, "error: ", error)

    if (loading) { return <p>Loading</p> }
    if (error) { return <p>Error</p> }
    if (!van) { return <p>No such Van.</p> }

    const { description, imageUrl, price } = van

    return (
        <div className="van-detail-container">


            <div className="van-description-container">
                <div>
                    <p>{description} </p>
                    <p>{price}$ per day</p>
                    <Button variant="primary" onClick={handleStartButton}>Starting Point</Button>
                    {
                        location ? <p>{location}</p> : ""
                    }
                </div>
                <img src={imageUrl} className="van-img" />
            </div>

            <div className="map-frame"><Map lat={lat} long={long} /></div>

        </div>
    )
}

