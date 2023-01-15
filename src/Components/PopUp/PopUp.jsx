import React, { useContext } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import { StyledOverlay, StyledContent, StyledBtn } from "./PopUp.styles";

const PopUp = props => {
	const { setIsModalOpen } = useContext(CharactersContext);
	return (
		<div>
			<StyledOverlay />
			<StyledContent>
				<StyledBtn onClick={() => setIsModalOpen(prev => !prev)}>
					&times;
				</StyledBtn>
			</StyledContent>
		</div>
	);
};

export default PopUp;
