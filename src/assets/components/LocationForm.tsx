import { useEffect, useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import { getCoordinates } from '../../utils/getCoordinates';
import { useLocation } from '../hooks/useLocation';

type locationFormProps = {
    type: "start" | "end",
    children?: React.ReactNode
}


function LocationForm( { type, children}: locationFormProps) {
    console.log(children)

    const locationRef = useRef<HTMLInputElement>(null)
    const {
        startLocation,
        setStartLocation,
        endLocation,
        setEndLocation
    } = useLocation()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const locationName = locationRef.current && locationRef.current.value ? locationRef.current.value : "madrid"
        const { name, latitude, longitude } = await getCoordinates(locationName)

        if (type === "start") {

            setStartLocation({
                location: name,
                lat: latitude,
                long: longitude
            })

        } else if (type === "end") {

            setEndLocation({
                location: name,
                lat: latitude,
                long: longitude
            })
        }
    }

    // JUST FOR DEVELOPMENT CONSOLE

    useEffect(() => {
        const { location: startLoc, lat: startLat, long: startLong } = startLocation
        const { location: endLoc, lat: endLat, long: endLong } = endLocation

        console.log("Start City:", startLoc, "latitude", startLat, "longitude", startLong);
        console.log("End City:", endLoc, "latitude", endLat, "longitude", endLong)
    }, [startLocation, endLocation]);

    const { location, lat, long } = startLocation

    console.log("Start 2nd console", location, lat, long)

    // END OF CONSOLE

    return (
        <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3} className="justify-content-between align-items-center">
                <Form.Group className="mb-3" controlId="formStartLocation" style={
                    { width: "100%" }
                }>
                    <Form.Label>Starting Point</Form.Label>
                    <Form.Control
                        ref={locationRef}
                        type="text"
                        placeholder="Enter start location"
                        required
                    />
                    <Form.Text className="text-muted">
                        {children}
                    </Form.Text>
                </Form.Group>
                <Stack direction="horizontal">
                    <Button variant="primary" type="submit" className="m-3">
                        Submit
                    </Button>
                </Stack>
            </Stack>
            {
                location ? <p className="m-0">Start from: {location}</p> : ""
            }
        </Form>
    )
}

export default LocationForm