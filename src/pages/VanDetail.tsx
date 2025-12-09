import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { Link, useLoaderData, useLocation, useParams } from "react-router";
import LocationForm from "../components/LocationForm";
import UserMap from "../components/UserMap";
import { useMapLocation } from "../hooks/useMapLocation";
// import { useVan } from "../hooks/useVan";
import { getVan } from "../api";
import type { LoaderFunctionArgs } from "react-router";

export function loader({ params }: LoaderFunctionArgs) {
	if (!params.vanId) {
		throw new Error("No VanId");
	}
	return getVan(params.vanId);
}

export default function VanDetail() {
	const { distance, mapRef } = useMapLocation();

	const pageLocation = useLocation();
	const searchQuery = pageLocation.state?.search || "";
	const searchParams = new URLSearchParams(searchQuery);

	const van = useLoaderData();
	// console.log(van)

	const { description, imageUrl, price } = van;

	return (
		<Stack direction="vertical" className="van-detail-container">
			<Link to={`..?${searchQuery}`} relative="path">
				Back to {searchQuery ? searchParams.get("type") : "all"} vans
			</Link>

			<Stack
				direction="horizontal"
				gap={5}
				className="
                        van-description-container 
                        flex-column-reverse
                        flex-md-row
                        "
			>
				<Stack className="m-3 m-md-0">
					<p>{description} </p>
					<p>{price}$ per day</p>

					<LocationForm type="start">
						I want to start my journey from...
					</LocationForm>
					<LocationForm type="end">I want to end my journey at...</LocationForm>

					{distance && <p>Total distance: {distance} kms</p>}
				</Stack>
				<Image src={imageUrl} rounded fluid className="van-img" />
			</Stack>

			<Stack className="map-frame mt-3" ref={mapRef}>
				<UserMap />
			</Stack>
		</Stack>
	);
}
