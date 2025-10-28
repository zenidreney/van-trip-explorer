import { useVans } from "../hooks/useVans"
import { Link } from "react-router"

import "./Vans.css"




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
            <Link to={`/vans/${van.id}`}>
                <div key={van.id} className='van-info-container'>
                    <img className="van-img" src={van.imageUrl} />
                    <p>{van.name} </p>
                    <p>{van.price.toString()} </p>
                </div>
            </Link>
        )

    })



    return (
        <div className='vans-container'>
            {vanEls}
        </div>

    )
}