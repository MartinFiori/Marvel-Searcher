import React, { useContext } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import Spinner from "../Spinner/Spinner";
import { StyledCardContainer } from "./CardsContainer.styles";

const CardsContainer = () => {
	const { characters, loading, userSearch } = useContext(CharactersContext);
	return (
		<StyledCardContainer>
			{loading && userSearch ? (
				<Spinner />
			) : userSearch && characters.length && !loading ? (
				characters.map(el => <h1 key={el.id}>{el.name}</h1>)
			) : (
				<h1>NO HAY PERSONAJES</h1>
			)}
		</StyledCardContainer>
	);
};

export default CardsContainer;
