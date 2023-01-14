import React, { useContext } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import { StyledCardContainer } from "./CardsContainer.styles";

const CardsContainer = () => {
	const { FetchRandomCharacter } = useContext(CharactersContext);
	return <StyledCardContainer></StyledCardContainer>;
};

export default CardsContainer;
