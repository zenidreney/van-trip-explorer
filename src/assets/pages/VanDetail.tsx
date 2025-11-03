import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import Map from "../components/Map"
import Button from 'react-bootstrap/Button';

import { getCoordinates } from "../../utils/getCoordinates";

import { useRef } from "react";

import "./VanDetail.css"

export default function VanDetail() {

    const locationName = useRef(null)
    const long = useRef(null)
    const lat = useRef(null)


    
    async function handleStartButton() {
        const { name, longitude, latitude } = await getCoordinates("barcelona")
        //console.log(name, longitude, latitude)
        locationName.current = name
        long.current = longitude
        lat.current = latitude

        console.log(locationName, long, lat)
    }



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
                </div>
                <img src={imageUrl} className="van-img" />
            </div>

            <div className="map-frame"><Map /></div>

        </div>
    )
}

