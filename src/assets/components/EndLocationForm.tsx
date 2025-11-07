import { useRef, useEffect } from 'react';
import { useLocation } from '../hooks/useLocation';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

import { getCoordinates } from '../../utils/getCoordinates';



function EndLocation() {

    const endRef = useRef<HTMLInputElement>(null)
    const { endLocation, setEndLocation } = useLocation()


    
    
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const endPoint = endRef.current && endRef.current.value ? endRef.current.value : "malaga"
        const { name, latitude, longitude } = await getCoordinates(endPoint)
        setEndLocation({
            location: name,
            lat: latitude,
            long: longitude
        })


    }

    // JUST FOR DEVELOPMENT CONSOLE
    
        useEffect(() => {
            const { location, lat, long } = endLocation
    
            console.log("End City:", location, "latitude", lat, "longitude", long);
        }, [endLocation]);
    
        const { location, lat, long } = endLocation
    
        console.log("End 2nd console", location, lat, long)
    
    // END OF CONSOLE

    return (
        <Form onSubmit={handleSubmit}>
            <Stack direction="horizontal" gap={3} className="justify-content-between align-items-center">
                <Form.Group className="mb-3" controlId="formStartLocation" style= {
                           { width: "100%" }
                        }>
                    <Form.Label>End Point</Form.Label>
                    <Form.Control
                        ref={endRef}
                        type="text"
                        placeholder="Enter end location"
                        
                        required
                         />
                    <Form.Text className="text-muted">
                        I want to end my journey at...
                    </Form.Text>
                </Form.Group>
                <Stack direction="horizontal">
                    <Button variant="primary" type="submit" className="m-3">
                        Submit
                    </Button>
                </Stack>
            </Stack>
                    {
                        location ? <p className="m-0">End at: {location}</p> : ""
                    }
        </Form>
    )
}

export default EndLocation