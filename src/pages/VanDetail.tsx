import { Link, useLocation, useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import { useMapLocation } from "../hooks/useMapLocation";

import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';

import Map from "../components/Map"

import LocationForm from "../components/LocationForm";




export default function VanDetail() {
    const { vanId } = useParams()
    //console.log(typeof vanId, vanId)
    const { van, loading, error } = useVan(vanId)
    // console.log("loading: ", loading, "error: ", error)
    const { distance, mapRef } = useMapLocation()

    const pageLocation = useLocation()
    const searchQuery = pageLocation.state?.search || ""
    const searchedType = searchQuery?.slice(5)
    
    if (loading) { return <p>Loading</p> }
    if (error) { return <p>Error</p> }
    if (!van) { return <p>No such Van.</p> }
    
    
    const { description, imageUrl, price } = van


    return (
        <Stack direction="vertical" className="van-detail-container">
            <Link to={`..?${searchQuery}`} relative="path">Back to {searchQuery ? searchedType : "all"} vans</Link>

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

                    <LocationForm type="start">I want to start my journey from...</LocationForm>
                    <LocationForm type="end">I want to end my journey at...</LocationForm>


                {distance && <p>Total distance: {distance} kms</p>}
                </Stack>
                <Image src={imageUrl} rounded fluid className="van-img" />

            </Stack>

            <Stack className="map-frame mt-3" ref={mapRef} >

                <Map />

            </Stack>
        </Stack>
    )
}

