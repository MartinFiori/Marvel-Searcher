import React, { useContext } from "react";
import { StyledFavoritesContainer } from "./FavoritesContainer.styles";
import { StyledCardContainer } from "../CardsContainer/CardsContainer.styles";
import Card from "../Card/Card.jsx";
import { CharactersContext } from "../../Context/CharactersContext";

const FavoritesContainer = () => {
	const { favorites } = useContext(CharactersContext);
	return (
		<StyledFavoritesContainer>
			<StyledCardContainer>
				{favorites.length
					? favorites?.map(el => <Card key={el.id} {...el} />)
					: null}
			</StyledCardContainer>
		</StyledFavoritesContainer>
	);
};

export default FavoritesContainer;
