import "./Home.css"

import { useVans } from "../hooks/useVans"

export default function Home() {

    const  { vans }  = useVans()

    console.log(vans)


    return (
        <div className="home-container">
            <h1>I am Home</h1>
        </div>
    )
}