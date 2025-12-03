import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router";
import vanImage from "../assets/van-night-small.png";

export default function About() {
	return (
		<Stack className="align-items-center">
			<Image src={vanImage} className="banner-img mb-2" />
			<Stack className="px-3">
				<Stack gap={3} className="align-items-center text-center">
					<h1>Don’t squeeze in a sedan when you could relax in a van.</h1>

					<p>
						Dream your road trip with the perfect travel van. Take the
						opportunity to make your dream itenireray. (Imagination without
						limits 😉){" "}
					</p>
					<p>
						{" "}
						Click the button below to choose a van. On the next screen you can
						choose your dream route.
					</p>
				</Stack>
				<Stack className="align-items-center text-center">
					<h2>
						Your destination is waiting. Your van is ready. Your destination is
						waiting. Your van is ready.
					</h2>
					<Link to="/vans" className="link-to-vans mb-2">
						Click and choose your Van
					</Link>
				</Stack>
			</Stack>
		</Stack>
	);
}
