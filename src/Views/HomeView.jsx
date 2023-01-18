import React, { useContext } from "react";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import { CharactersContext } from "../Context/CharactersContext";

export default function HomeView() {
	const { userSearch, randomImg } = useContext(CharactersContext);

	return userSearch ? (
		<CardsContainer />
	) : (
		<img
			src={randomImg}
			style={{
				maxWidth: "500px",
				display: "block",
				marginInline: "auto",
				marginTop: "3rem",
				borderRadius: "5px",
			}}
			alt="Home"
		/>
	);
}
