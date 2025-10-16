import { useState, useEffect } from 'react'

import { getApiObject } from '../../api.ts'

import "./Vans.css"

type Van = {
    id: string,
    name: string,
    price: number,
    imageUrl: string,
    type: string,
    description: string,
    hostId: string
}

export default function Vans() {
    const [vans, setVans] = useState<Van[]>([])

    useEffect(() => {
        async function getVans() {
            const vanObj = await getApiObject()

            setVans(vanObj)
        }

        getVans()

    }, [])

    useEffect(() => {
        console.log(vans)
    }, [vans])


    const vanEls = vans.map(van => {
        return (
            <div>


                <img className="van-img" src={van.imageUrl} />
                <p>{van.name} </p>
                <p>{van.price.toString()} </p>

            </div>
        )

    })



    return (
        <>
            <h1>I am Vans</h1>
            {vanEls}

        </>
    )
}