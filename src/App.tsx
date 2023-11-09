import React from "react";

import "./App.css"
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";

export default function App(): React.ReactNode {

	return (
		<main>
			<div className="main-container">
				<Navbar />
				<Login />
				<Footer />
			</div>
		</main>
	);
}