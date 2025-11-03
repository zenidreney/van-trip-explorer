import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import clsx from 'clsx';
import "./Home.css"

import { useVans } from "../hooks/useVans"

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
                <img
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
            </Carousel.Item>
        )
    })




    return (
        <Carousel fade className="carousel-container" >
            {vansElements}
        </Carousel>
    )
}