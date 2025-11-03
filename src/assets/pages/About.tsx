/* import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button'; */

import Carousel from 'react-bootstrap/Carousel';
import { useVans } from '../hooks/useVans';

//import ExampleCarouselImage from 'components/ExampleCarouselImage';

export default function About() {



    const { vans, loading, error } = useVans()

    //console.log("loading", loading, "err", error)

    if (loading) {
        return <p>Loading</p>
    }

    if (error) {
        return <p>Error</p>
    }

    const vansElements = vans.map((van) => {

        return (
            //<img key={van.id} className="home-vans" src={van.imageUrl} />
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={van.imageUrl}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })




    return (
        <Carousel fade>
            {vansElements}
        </Carousel>
    )
}