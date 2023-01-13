import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

export default function Layout({ children }) {
	return (
		<div>
			<NavBar />
			{children}
			<Footer />
		</div>
	);
}
