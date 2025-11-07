import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import { useLocation } from "../hooks/useLocation";

import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import Map from "../components/Map"
import StartLocationForm from "../components/StartingLocationForm";
import EndLocationForm  from "../components/EndLocationForm";


export default function VanDetail() {
    const { vanId } = useParams()
    //console.log(typeof vanId, vanId)
    const { van, loading, error } = useVan(vanId)
    // console.log("loading: ", loading, "error: ", error)
    const { distance } = useLocation()

    if (loading) { return <p>Loading</p> }
    if (error) { return <p>Error</p> }
    if (!van) { return <p>No such Van.</p> }

    const { description, imageUrl, price } = van

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
                <Stack className="m-3 m-md-0">

                    <p>{description} </p>
                    <p>{price}$ per day</p>

                    <StartLocationForm />

                    <EndLocationForm />

                {distance && <p>Total distance: {distance} kms</p>}
                </Stack>
                <Image src={imageUrl} rounded fluid className="van-img" />

            </Stack>

            <Stack className="map-frame mt-3">

                <Map />

            </Stack>
        </Stack>
    )
}

