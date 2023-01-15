import styled, { keyframes } from "styled-components";

const appear = keyframes`
0%{
  opacity: 0;
  transform: scale(0);
}
100%{
  opacity: 1;
  transform: scale(1);
}
`;

export const StyledCard = styled.section`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 300px;
	border-radius: 5px;
	overflow: hidden;
	animation: ${appear} 250ms linear;
	position: relative;
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const StyledBgImg = styled.img`
	width: 100%;
	height: 100%;
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
`;

export const StyledItem = styled.div`
	display: flex;
	align-items: center;
	height: ${props => props.height};
	padding: 20px;
	background: ${props => props.bg && "rgb(106, 44, 112)"};
	justify-content: ${props =>
		props.justify === "start" ? "flex-start" : "flex-end"};
`;

export const StyledName = styled.h3`
	color: #fff;
	font-weight: 700;
	font-size: 24px;
	text-transform: capitalize;
`;
