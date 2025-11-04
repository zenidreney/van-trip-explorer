import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import Map from "../components/Map"
import Button from 'react-bootstrap/Button';

import { getCoordinates } from "../../utils/getCoordinates";

import { useEffect } from "react";
import { useLocation } from "../hooks/useLocation";


import "./VanDetail.css"

export default function VanDetail() {

   

    const { location, setLocation } = useLocation()



    async function handleStartButton() {
        const { name, longitude, latitude } = await getCoordinates("barcelona")
        //console.log(name, longitude, latitude)
        setLocation({
            loc: name,
            long: longitude,
            lat: latitude
        })

    }
    
    useEffect(() => {
        console.log("City:", location.loc, "longitude", location.long, "latitude", location.lat);
    }, [location]);


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

