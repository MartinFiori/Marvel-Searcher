import styled, { keyframes } from "styled-components";

const appear = keyframes`
0%{
  top: -200%;
}
100%{
  top: 50%;
}
`;

export const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
`;

export const StyledContent = styled.section`
	position: fixed;
	border-radius: 10px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: clamp(400px, 600px, 90vw);
	height: 500px;
	background: ${({ theme }) => theme.color.primary};
	animation: ${appear} 350ms linear;
	z-index: 200;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledBtn = styled.div`
	cursor: pointer;
	position: absolute;
	top: 15px;
	right: 20px;
	width: 30px;
	height: 30px;
	text-align: center;
	line-height: 28px;
	font-weight: 700;
	border-radius: 50%;
	font-size: 48px;
	color: ${({ theme }) => theme.color.grey};
`;

export const StyledImg = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	outline: 5px solid #f00;
`;

export const StyledSeriesContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	padding: 15px;
	height: 70%;
	width: 90%;
	overflow-y: auto;
	&::-webkit-scrollbar-thumb {
		background-color: #ff0000;
		border-radius: 10px;
		border: 3px solid ${({ theme }) => theme.color.primary};
	}
	&::-webkit-scrollbar-track {
		background: #f0f0f0;
	}
	&::-webkit-scrollbar {
		width: 16px;
	}
	a {
		color: ${({ theme }) => theme.color.black};
		display: flex;
		width: 100%;
		height: 100px;
		gap: 15px;
		img {
			width: 100px;
			border-radius: 10px;
			object-fit: cover;
		}
	}
`;

export const StyledListItemContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	& h4 {
		display: flex;
		align-items: center;
		font-size: 18px;
	}
	& p {
		height: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
	}
`;
