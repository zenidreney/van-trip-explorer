import { Link } from "react-router"

export default function Header() {
    return (
        <header>

            <h1>I am Header</h1>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                 <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}