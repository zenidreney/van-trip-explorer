import { useParams } from "react-router"

import { useVan } from "../hooks/useVan"

export default function VanDetail() {

    
    const { vanId } = useParams()
    console.log(typeof vanId, vanId)
    
    const { van } = useVan(vanId)

    console.log(van)




    return <p>I am VanDetail</p>
}

