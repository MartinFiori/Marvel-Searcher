import React, { useContext } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import Card from "../Card/Card";
import PopUp from "../PopUp/PopUp";
import Spinner from "../Spinner/Spinner";
import { StyledCardContainer, StyledNotFound } from "./CardsContainer.styles";

const CardsContainer = () => {
	const { characters, isSearching, userSearch, isModalOpen } =
		useContext(CharactersContext);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "60vh",
				marginTop: "2rem",
			}}
		>
			{isSearching && characters.count ? <Spinner /> : ""}
			{!characters.count && userSearch && !isSearching ? (
				<StyledNotFound />
			) : (
				""
			)}
			<StyledCardContainer>
				{characters.count && userSearch && !isSearching
					? characters.results.map(el => <Card key={el.id} {...el} />)
					: null}
			</StyledCardContainer>

			{isModalOpen && <PopUp />}
		</div>
	);
};

export default CardsContainer;
