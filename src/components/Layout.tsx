import Header from "./Header"

import { Outlet } from "react-router"


import { Stack } from "react-bootstrap"
//import "../App.css"

export default function Layout() {
    return (
        <Stack gap={4} className="body-container mt-3">
            
            <Header />

            <main>
                <Outlet />
            </main>

        </Stack>
    )
}