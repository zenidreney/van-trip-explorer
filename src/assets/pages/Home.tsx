import "./Home.css"

import { useVans } from "../hooks/useVans"

export default function Home() {

    const  { loading, error }  = useVans()

    console.log("loading", loading, "err", error)


    return (
        <div className="home-container">
            <h1>I am Home</h1>
        </div>
    )
}