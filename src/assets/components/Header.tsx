import { Link } from "react-router"

export default function Header() {
    return (
        <header>

            <h1>Van-Trip Explorer</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}