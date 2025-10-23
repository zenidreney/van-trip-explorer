import { useVans } from "../hooks/useVans"

import "./Vans.css"




export default function Vans() {

    const { vans } = useVans()


    const vanEls = vans.map(van => {
        return (
            <div key={van.id} className='van-info-container'>


                <img className="van-img" src={van.imageUrl} />
                <p>{van.name} </p>
                <p>{van.price.toString()} </p>

            </div>
        )

    })



    return (
            <div className='vans-container'>
                {vanEls}
            </div>

    )
}