import { useVans } from "../hooks/useVans"
import { Link } from "react-router"

import Stack from 'react-bootstrap/Stack';

import Image from 'react-bootstrap/Image';

//import "./Vans.css"

export default function Vans() {

    const { vans, loading, error } = useVans()

    if (loading) {

        return <p>Loading</p>
    }

    if (error) {

        return <p>Error</p>
    }

    const vanEls = vans.map(van => {

        return (
            <Link key={van.id} to={`/vans/${van.id}`} className="text-reset text-decoration-none">

                <Stack className="justify-content-center align-items-center">

                    <Image className="van-img rounded" src={van.imageUrl} />
                    <Stack direction="horizontal" className="justify-content-between mt-3">
                        <p>{van.name} </p>
                        <p>{van.price.toString()}$ / day </p>
                    </Stack>

                </Stack>

            </Link>
        )

    })

    return (
        <Stack
            direction="horizontal"
            gap={5}
            className="flex-wrap justify-content-center"
        >
            {vanEls}
        </Stack>

    )
}