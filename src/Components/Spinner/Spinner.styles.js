import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0%{
  transform: rotate(0);
}
100%{
  transform: rotate(360deg);
}
`;

export const StyledSpinner = styled.div`
	width: 60px;
	height: 60px;
	border: 5px solid gray;
	border-left-color: blue;
	border-radius: 50%;
	animation: ${rotate} 1s infinite ease-in;
`;
