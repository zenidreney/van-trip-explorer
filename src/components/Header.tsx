import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

export default function Header() {
	return (
		<header>
			{/* <h1>Van-Trip Explorer</h1> */}
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand as={NavLink} to="/">
						Van-Trip-Explorer
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={NavLink} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to="/about">
								About
							</Nav.Link>
							<Nav.Link as={NavLink} to="/vans">
								Vans
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
}
