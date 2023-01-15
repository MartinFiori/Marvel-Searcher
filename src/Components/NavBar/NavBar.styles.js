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
	gap: 15px;
`;

export const StyledInput = styled.input`
	outline: none;
	border: none;
	font-size: 22px;
	letter-spacing: 2px;
	width: 80%;
	height: 100%;
	padding: 1rem;
	margin-right: auto;
	/* color: var(--light-grey); */
`;

StyledInput.defaultProps = {
	placeholder: "Buscar",
};

export const StyledResponsiveContainer = styled.div`
	height: 85%;
	padding-inline: 10px;
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	border-right: 1px solid var(--light-grey);
	border-left: 1px solid var(--light-grey);
`;
