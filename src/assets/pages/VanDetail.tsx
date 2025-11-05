import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import Map from "../components/Map"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';


import { getCoordinates } from "../../utils/getCoordinates";

import { useEffect, useRef } from "react";
import { useLocation } from "../hooks/useLocation";


export default function VanDetail() {
    const inputRef = useRef<HTMLInputElement>(null)

    const { startLocation, setStartLocation } = useLocation()

    async function handleStartSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        console.log(inputRef.current?.value)

        const startPoint = inputRef.current && inputRef.current.value ? inputRef.current.value : "madrid"



        const { name, latitude, longitude } = await getCoordinates(startPoint)
        //console.log(name, longitude, latitude)
        setStartLocation({
            location: name,
            lat: latitude,
            long: longitude
        })

    }



    useEffect(() => {
        const { location, lat, long } = startLocation

        console.log("City:", location, "latitude", lat, "longitude", long);
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

                    <Form onSubmit={handleStartSubmit}>
                        <Form.Group className="mb-3" controlId="formStartLocation">
                            <Form.Label>Starting Point</Form.Label>
                            <Form.Control
                                ref={inputRef}
                                type="text"
                                placeholder="Enter start location"
                                required />
                            <Form.Text className="text-muted">
                                I want to start my journey from...
                            </Form.Text>
                        </Form.Group>



                        <Stack direction="horizontal" className="justify-content-between">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            {
                                location ? <p>Start from: {location}</p> : ""
                            }
                        </Stack>
                    </Form>

                </Stack>
                <Image src={imageUrl} rounded fluid className="van-img" />

            </Stack>

            <Stack className="map-frame mt-3"><Map lat={lat} long={long} /></Stack>

        </Stack>
    )
}

