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
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 100;
`;

export const StyledContent = styled.section`
	position: fixed;
	border-radius: 10px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: clamp(90vw, 50vw, 600px);
	height: 500px;
	background: #fff;
	animation: ${appear} 350ms linear;
	z-index: 200;
`;

export const StyledBtn = styled.div`
	cursor: pointer;
	position: absolute;
	top: 15px;
	right: 20px;
	width: 30px;
	height: 30px;
	background: black;
	text-align: center;
	line-height: 28px;
	font-weight: 700;
	border-radius: 50%;
	font-size: 32px;
	color: white;
`;

export const StyledImg = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	outline: 5px solid #f00;
`;

// StyledImg.defaultProps = {
// 	src: ({ src }) => src,
// };
