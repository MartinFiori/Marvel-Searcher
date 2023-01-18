import styled from "styled-components";

export const StyledDetailContainer = styled.div`
	width: 100vw;
	min-height: 90vh;
`;

export const StyledCard = styled.div`
	max-width: 1100px;
	display: flex;
	margin-inline: auto;
	padding: 40px;
	gap: 25px;
	& img {
		flex-basis: 50%;
		width: clamp(300px, 50vw, 500px);
	}
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const StyledCardContent = styled.section`
	display: flex;
	flex-direction: column;
`;
export const StyledInfo = styled.p`
	font-family: "Courier New", Courier, monospace;
	font-weight: 700;
	font-size: 16px;
	span {
		font-family: "Courier New", Courier, monospace;
		font-size: 16px;
		font-weight: 700;
	}
`;
export const StyledDescription = styled.p`
	font-family: "Courier New", Courier, monospace;
	margin-top: 30px;
`;
export const StyledTitle = styled.h4`
	font-family: "Courier New", Courier, monospace;
	font-size: 22px;
	font-size: bolder;
	margin-bottom: 30px;
`;
