import React from "react";

import "./App.css"
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";

export default function App(): React.ReactNode {

	const [authUser, setAuthUser] = React.useState<{
		email: string,
		password: string,
		toBeRemembered: boolean
	}>({
		email: "",
		password: "",
		toBeRemembered: false
	});

	const [isPasswordVisible, setisPasswordVisible] = React.useState<boolean>(false);

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>): void {
		const target = event.target as HTMLInputElement;

		if (target.getAttribute('data-password-toggle-btn')) {
			setisPasswordVisible((prevVal: boolean) => !prevVal);
		} else {
			const { name, value, type, checked } = (target);
			setAuthUser(prevFormData => {
				return {
					...prevFormData,
					[name]: type === "checkbox" ? checked : value
				}
			});
		}
	}

	function handleLoginSubmit(_event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
		console.log("Logged In with ", authUser);
	}

	return (
		<main>
			<div className="main-container">
				<Navbar />
				<Login
					userData={authUser}
					isPasswordVisible={isPasswordVisible}
					handleInputChange={handleInputChange}
					handleLoginSubmit={handleLoginSubmit} />
				<Footer />
			</div>
		</main>
	);
}