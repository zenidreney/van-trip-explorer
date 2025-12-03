import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import Layout from "./components/Layout";
import { LocationContextProvider } from "./context/LocationContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import VanDetail from "./pages/VanDetail";
import Vans from "./pages/Vans";

function App() {
	return (
		<LocationContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/vans" element={<Vans />} />
						<Route path="/vans/:vanId" element={<VanDetail />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</LocationContextProvider>
	);
}

export default App;
