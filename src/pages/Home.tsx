import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import clsx from 'clsx';
import "./Home.css"

import { Link } from 'react-router';

import { useVans } from "../hooks/useVans"

import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';


export default function Home() {



    const { vans, loading, error } = useVans()
    if (loading) <p>Loading</p>
    if (error) <p>Error</p>


    const vansElements = vans.map((van) => {
        const badgeColor = 
                    van.type === "simple" ? clsx("info") : 
                    van.type === "luxury" ? clsx("dark") : 
                    van.type === "rugged" ? clsx("warning") : ""

        return (
            //<img key={van.id} className="home-vans" src={van.imageUrl} />
            <Carousel.Item key={van.id}>
                <Link to={`/vans/${van.id}`}>
                    <Image
                        className="d-block w-100"
                        src={van.imageUrl}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>{van.name} </h5>
                        <Badge bg={badgeColor}>
                            {van.type}
                        </Badge>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        )
    })




    return (
        <Stack gap={5} className="align-items-center">

           {/*  <h1>Ready for a ride?</h1>
            <h2>Choose your van</h2>
            <h2>Choose your route</h2> */}
            <Link to="/vans" className="link-to-vans mb-2">Click and choose your Van</Link>
            

            <Carousel fade className="carousel-container" >
                {vansElements}
            </Carousel>

        </Stack>
    )
}