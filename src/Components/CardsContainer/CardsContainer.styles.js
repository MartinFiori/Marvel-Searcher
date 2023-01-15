import styled from "styled-components";

export const StyledCardContainer = styled.div`
	max-width: 1100px;
	min-height: 60vh;
	margin-inline: auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(286px, 1fr));
	grid-auto-rows: minmax(340px, auto);
	grid-gap: 35px;
	gap: 35px;
	padding: 20px;
	grid-auto-flow: dense;
	margin-bottom: 5rem;
	justify-content: center;
	align-content: center;
`;

export const StyledNotFound = styled.img`
	display: block;
	width: 350px;
	height: auto;
	margin-inline: auto;
`;

StyledNotFound.defaultProps = {
	src: "https://res.cloudinary.com/dax0wf30d/image/upload/v1673729915/shit/character_not_found_gbhqkj.png",
};

export const StyledPopUp = styled.section``;

export const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`;

export const StyledContent = styled.section``;
