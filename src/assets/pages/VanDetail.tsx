import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import Map from "../components/Map"

import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import { useLocation } from "../hooks/useLocation";

import StartingLocation from "../components/StartingLocation";




export default function VanDetail() {

    const { startLocation } = useLocation()

    const { vanId } = useParams()
    //console.log(typeof vanId, vanId)
    const { van, loading, error } = useVan(vanId)
    // console.log("loading: ", loading, "error: ", error)

    if (loading) { return <p>Loading</p> }
    if (error) { return <p>Error</p> }
    if (!van) { return <p>No such Van.</p> }

    const { description, imageUrl, price } = van
    const { lat, long } = startLocation

    return (
        <Stack direction="vertical" className="van-detail-container">


            <Stack
                direction="horizontal"
                gap={5}
                className="
                        van-description-container 
                        flex-column-reverse
                        flex-md-row
                        ">
                <Stack>
                    <p>{description} </p>
                    <p>{price}$ per day</p>

                    <StartingLocation />

                </Stack>
                <Image src={imageUrl} rounded fluid className="van-img" />

            </Stack>

            <Stack className="map-frame mt-3"><Map lat={lat} long={long} /></Stack>

        </Stack>
    )
}

