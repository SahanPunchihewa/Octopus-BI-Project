import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import CheckLoginStatus from "./CheckLoginStatus";
import Header from "../components/Header";

import { Home } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header/>
				<div className="min-h-screen">
					<Routes>
						{/* Public Routes */}
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default AppRoutes;
