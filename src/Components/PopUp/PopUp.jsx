import React, { useContext, useEffect } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import {
	StyledOverlay,
	StyledContent,
	StyledBtn,
	StyledImg,
} from "./PopUp.styles";

const PopUp = () => {
	const { setIsModalOpen, selected, setSelected } =
		useContext(CharactersContext);
	useEffect(() => {
		return () => {
			setSelected([]);
		};
	}, []);
	return (
		<div>
			<StyledOverlay />
			<StyledContent>
				<StyledBtn onClick={() => setIsModalOpen(prev => !prev)}>
					&times;
				</StyledBtn>
				{selected.count && selected.results.length ? (
					selected.results.map(el => <h1 key={el.id}>{el.title}</h1>)
				) : (
					<h1>cargando</h1>
				)}
			</StyledContent>
		</div>
	);
};

export default PopUp;
