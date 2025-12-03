import { Stack } from "react-bootstrap";
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
	return (
		<Stack gap={4} className="body-container mt-5">
			<Header />

			<main>
				<Outlet />
			</main>
		</Stack>
	);
}
