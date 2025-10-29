import { useParams } from "react-router"

import { useVan } from "../hooks/useVan"

export default function VanDetail() {

    
    const { vanId } = useParams()
    console.log(typeof vanId, vanId)
    
    const { van, loading, error } = useVan(vanId)
    
    console.log(van)
    console.log("loading: ", loading, "error: ", error)

     if (loading) {
        return <p>Loading</p>
    }

    if (error) {
        return <p>Error</p>
    }



    return <p>I am VanDetail</p>
}

