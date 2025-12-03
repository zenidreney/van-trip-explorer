import { useEffect, useRef, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

import { useMapLocation } from "../hooks/useMapLocation";
import { getCoordinates } from "../utils/getCoordinates";

type locationFormProps = {
	type: "start" | "end";
	children?: React.ReactNode;
};

type GetCoordinatesResult = {
	place_id: number;
	licence: string;
	osm_type: string;
	osm_id: number;
	lat: string;
	lon: string;
	display_name: string;
	class: string;
	type: string;
	place_rank: number;
	importance: number;
	name: string;
	addresstype: string;
	boundingbox: string[];
};

function LocationForm({ type, children }: locationFormProps) {
	const [locationData, setLocationData] = useState<
		GetCoordinatesResult[] | null
	>(null);
	const [isStartSubmitted, setIsStartSubmitted] = useState<boolean>(false);
	const [isEndSubmitted, setIsEndSubmitted] = useState<boolean>(false);

	const isSubmitted = type === "start" ? isStartSubmitted : isEndSubmitted;

	const locationRef = useRef<HTMLInputElement>(null);
	const {
		startLocation,
		setStartLocation,
		endLocation,
		setEndLocation,
		mapRef,
	} = useMapLocation();
	const { location: startPoint } = startLocation;
	const { location: endPoint } = endLocation;
	const setLocationByType =
		type === "start" ? setStartLocation : setEndLocation;
	const setIsSubmitted =
		type === "start" ? setIsStartSubmitted : setIsEndSubmitted;

	useEffect(() => {
		if (endPoint) {
			mapRef.current?.scrollIntoView();
		}
	}, [mapRef, endPoint]);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const locationName = locationRef.current?.value
			? locationRef.current.value
			: "madrid";
		const dataFromGetCoordinates = await getCoordinates(locationName);

		const firstResultLocation = dataFromGetCoordinates[0].display_name;
		const firstResultLatitude = dataFromGetCoordinates[0].lat;
		const firstResultLongitude = dataFromGetCoordinates[0].lon;

		setLocationByType({
			location: firstResultLocation,
			lat: firstResultLatitude,
			long: firstResultLongitude,
		});
		setLocationData(dataFromGetCoordinates);
		setIsSubmitted(true);
	}

	function handleLocationOptionButton(location: GetCoordinatesResult) {
		setLocationByType({
			location: location.display_name,
			lat: location.lat,
			long: location.lon,
		});
		setIsSubmitted(false);
	}

	const searchLocationOptions = locationData?.map((loc) => {
		return (
			<Button
				key={loc.osm_id}
				variant="warning"
				onClick={() => handleLocationOptionButton(loc)}
			>
				{loc.display_name}
			</Button>
		);
	});

	return (
		<Form onSubmit={handleSubmit}>
			<Stack direction="horizontal" gap={3} className="align-items-end">
				<Form.Group
					controlId={`form-${type}-location`}
					style={{ width: "100%" }}
				>
					<Form.Label className="text-muted">{children}</Form.Label>
					<Form.Control
						ref={locationRef}
						type="text"
						placeholder="Enter a city or a town..."
						required
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Stack>

			{type === "start" && startPoint && <p>Start from: {startPoint}</p>}

			{type === "end" && endPoint && <p>End at: {endPoint}</p>}

			<Stack gap={3}>{isSubmitted && searchLocationOptions}</Stack>
		</Form>
	);
}

export default LocationForm;
