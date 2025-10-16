import Header from "./Header"

import { Outlet } from "react-router"

import "../../App.css"

export default function Layout() {
    return (
        <div className="body-container">
            <Header />
            <main>

            <Outlet />
            </main>
        </div>
    )
}