import { getCoordinates } from "../../utils/getCoordinates";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import { useEffect, useRef } from "react";
import { useLocation } from "../hooks/useLocation";


export default function StartingLocation() {

    const startRef = useRef<HTMLInputElement>(null)
    const { startLocation, setStartLocation } = useLocation()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        //console.log(inputRef.current?.value)

        const startPoint = startRef.current && startRef.current.value ? startRef.current.value : "madrid"
        const { name, latitude, longitude } = await getCoordinates(startPoint)
        //console.log(name, longitude, latitude)
        setStartLocation({
            location: name,
            lat: latitude,
            long: longitude
        })

    }

// JUST FOR DEVELOPMENT CONSOLE

    useEffect(() => {
        const { location, lat, long } = startLocation

        console.log("City:", location, "latitude", lat, "longitude", long);
    }, [startLocation]);

    const { location, lat, long } = startLocation

    console.log("2nd console", location, lat, long)

// END OF CONSOLE



    return(
        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formStartLocation">
                            <Form.Label>Starting Point</Form.Label>
                            <Form.Control
                                ref={startRef}
                                type="text"
                                placeholder="Enter start location"
                                required />
                            <Form.Text className="text-muted">
                                I want to start my journey from...
                            </Form.Text>
                        </Form.Group>
                        <Stack direction="horizontal" className="align-items-end justify-content-between">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            {
                                location ? <p className="m-0">Start from: {location}</p> : ""
                            }
                        </Stack>
                    </Form>
    )
}

