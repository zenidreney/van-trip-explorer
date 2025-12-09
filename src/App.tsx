import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router";
import "./App.css";

import Layout from "./components/Layout";
import { LocationContextProvider } from "./context/LocationContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import VanDetail from "./pages/VanDetail";
import Vans, { loader as vanLoader } from "./pages/Vans";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
				<Route path="/" element={<Layout />} errorElement={<p>Error</p>} >
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/vans" element={<Vans />} loader={vanLoader} />
					<Route path="/vans/:vanId" element={<VanDetail />} />
					<Route path="*" element={<NotFound />} />
				</Route>
		),
	);

	return (
		<LocationContextProvider>
			<RouterProvider router={router} />
		</LocationContextProvider>
	);
}

export default App;
