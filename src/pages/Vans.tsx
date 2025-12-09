import clsx from "clsx";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { Link, useSearchParams } from "react-router";
// import { useVans } from "../hooks/useVans";
// import { getAllVans } from "../api";

import { useLoaderData } from "react-router";
import { getAllVans, type Van } from "../api";

//import "./Vans.css"
export function loader() {
	return getAllVans()
}

export default function Vans() {
	const [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get("type");

	console.log(typeFilter, searchParams.toString());

	// const { vans, loading, error } = useVans();

	const vans = useLoaderData()
	console.log(vans)


	/* if (loading) {
		return <p>Loading</p>;
	}

	if (error) {
		return <p>Error</p>;
	} */

	const filteredVans: Van[] = typeFilter
		? vans.filter((van: Van) => van.type === typeFilter)
		: vans;

	const vanEls = filteredVans.map((van) => {
		const badgeColor =
			van.type === "simple"
				? clsx("info")
				: van.type === "luxury"
					? clsx("dark")
					: van.type === "rugged"
						? clsx("warning")
						: "";

		return (
			<Link
				key={van.id}
				to={`/vans/${van.id}`}
				state={{ search: searchParams.toString() }}
				className="text-reset text-decoration-none"
			>
				<Stack className="justify-content-center align-items-center">
					<Image className="van-img rounded" src={van.imageUrl} />
					<Stack
						direction="horizontal"
						className="justify-content-between mt-3"
					>
						<p>{van.name} </p>
						<p>{van.price.toString()}$ / day </p>
					</Stack>

					<Stack>
						<h5>{van.name} </h5>
						<Badge bg={badgeColor} className="align-self-start">
							{van.type}
						</Badge>
					</Stack>
				</Stack>
			</Link>
		);
	});

	return (
		<Stack>
			<Stack
				direction="horizontal"
				gap={3}
				className="mb-3 justify-content-center"
			>
				<Button
					variant="info"
					className="text-white"
					onClick={() => setSearchParams({ type: "simple" })}
				>
					Simple
				</Button>
				<Button
					variant="warning"
					className="text-white"
					onClick={() => setSearchParams({ type: "rugged" })}
				>
					Rugged
				</Button>
				<Button
					variant="dark"
					className="text-white"
					onClick={() => setSearchParams({ type: "luxury" })}
				>
					Luxury
				</Button>
				{typeFilter && (
					<Button
						variant="success"
						className="text-white"
						onClick={() => setSearchParams({})}
					>
						All
					</Button>
				)}
			</Stack>
			<Stack
				direction="horizontal"
				gap={5}
				className="flex-wrap justify-content-center"
			>
				{vanEls}
			</Stack>
		</Stack>
	);
}
