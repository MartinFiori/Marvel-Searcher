import React, { useContext, useState } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import Card from "../Card/Card";
import PopUp from "../PopUp/PopUp";
import Spinner from "../Spinner/Spinner";
import { StyledCardContainer, StyledNotFound } from "./CardsContainer.styles";

const CardsContainer = () => {
	const {
		characters,
		isSearching,
		userSearch,
		isModalOpen,
		handleSearchSeries,
		selected,
	} = useContext(CharactersContext);
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
			{isSearching && characters.count && !selected ? <Spinner /> : ""}
			{!characters.count && userSearch && !isSearching ? (
				<StyledNotFound />
			) : (
				""
			)}
			<StyledCardContainer>
				{characters.count && userSearch && !isSearching
					? characters.results.map(el => (
							<Card
								key={el.id}
								{...el}
								onClick={() => handleSearchSeries(el)}
							/>
					  ))
					: null}
			</StyledCardContainer>

			{isModalOpen && <PopUp />}
		</div>
	);
};

export default CardsContainer;
