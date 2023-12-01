import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";
// import CheckLoginStatus from "./CheckLoginStatus";
import Header from "../components/Header";

import { Home, UserLogin } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header/>
				<div className="min-h-screen">
					<Routes>
						{/* Public Routes */}
						<Route path="/" element={<Home />} />
						<Route path="/user/login" element={<UserLogin />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default AppRoutes;
