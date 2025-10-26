import "./Home.css"

import { useVans } from "../hooks/useVans"

export default function Home() {

    const { vans, loading, error } = useVans()

    console.log("loading", loading, "err", error)

    if (loading) {
        return <p>Loading</p>
    }

    if (error) {
        return <p>Error</p>
    }

    const vansElements = vans.map((van) => {
       
        return (
            <img key={van.id} className="home-vans" src={van.imageUrl} />
        )
    })



    return (
        <div className="home-container">
            <h1>I am Home</h1>
            <div className="home-vans-container">
                {vansElements}
            </div>
        </div>
    )
}