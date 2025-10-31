import { useParams } from "react-router"
import { useVan } from "../hooks/useVan"
import Map from "../components/Map"

export default function VanDetail() {

    const { vanId } = useParams()
    //console.log(typeof vanId, vanId)
    const { van, loading, error } = useVan(vanId)
    // console.log("loading: ", loading, "error: ", error)

    if (loading) { return <p>Loading</p> }
    if (error) { return <p>Error</p> }
    if (!van) { return <p>No such Van.</p> }

    const { description, imageUrl } = van

    return (
        <div className="van-datail-container">

            <Map />

            <p>I am VanDetail</p>
            <p>{description} </p>
            <img src={imageUrl} />

        </div>
    )
}

