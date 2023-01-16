import React from "react";
import NavBar from "./Components/NavBar/NavBar";

export default function Layout({ children }) {
	return (
		<div>
			<NavBar />
			{children}
		</div>
	);
}
