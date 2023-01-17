import React, { useContext } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import Card from "../Card/Card";
import PopUp from "../PopUp/PopUp";
import Spinner from "../Spinner/Spinner";
import { StyledCardContainer, StyledNotFound } from "./CardsContainer.styles";

const CardsContainer = () => {
	const { characters, userSearch, handleSearchSeries, selected } =
		useContext(CharactersContext);
	const [isModalOpen, setIsModalOpen] = React.useState(false);
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
			{characters.count && !selected ? <Spinner /> : ""}
			{!characters.count && userSearch ? <StyledNotFound /> : ""}
			<StyledCardContainer>
				{characters.count && userSearch
					? characters.results.map(el => (
							<Card
								key={el.id}
								{...el}
								setIsModalOpen={setIsModalOpen}
								onClick={() => handleSearchSeries(el)}
							/>
					  ))
					: null}
			</StyledCardContainer>

			{isModalOpen && <PopUp setIsModalOpen={setIsModalOpen} />}
		</div>
	);
};

export default CardsContainer;
