import { useParams } from "react-router"

export default function VanDetail() {

    const vanId = useParams()
    console.log(vanId)





    return <p>I am VanDetail</p>
}

