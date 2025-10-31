import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import Map from "../components/Map"

import "./VanDetail.css"

export default function VanDetail() {

    const { vanId } = useParams()
    //console.log(typeof vanId, vanId)
    const { van, loading, error } = useVan(vanId)
    // console.log("loading: ", loading, "error: ", error)

    if (loading) { return <p>Loading</p> }
    if (error) { return <p>Error</p> }
    if (!van) { return <p>No such Van.</p> }

    const { description, imageUrl, price } = van

    return (
        <div className="van-detail-container">


            <div className="van-description-container">
                <div>
                    <p>{description} </p>
                    <p>{price}$ per day</p>
                </div>
                <img src={imageUrl} className="van-img" />
            </div>

            <div className="map-frame"><Map /></div>

        </div>
    )
}

