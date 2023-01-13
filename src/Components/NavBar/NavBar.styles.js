import styled from "styled-components";

export const StyledLogo = styled.img`
	height: 100%;
	width: auto;
`;

StyledLogo.defaultProps = {
	src: "https://res.cloudinary.com/dax0wf30d/image/upload/v1673573946/shit/Marvel_Logo.svg_jms5gl.png",
	alt: "Logo",
};

export const StyledNavbarContainer = styled.div`
	height: 60px;
	display: flex;
	align-items: center;
	flex-direction: row;
	background: #fff;
	padding: 10px;
`;
