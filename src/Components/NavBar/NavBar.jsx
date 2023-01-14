import React, { useContext } from "react";
import StarSVG from "../../SVG/StarSVG";
import SearchSVG from "../../SVG/SearchSVG";
import {
	StyledInput,
	StyledLogo,
	StyledNavbarContainer,
	StyledResponsiveContainer,
} from "./NavBar.styles";
import { CharactersContext } from "../../Context/CharactersContext";

export default function NavBar() {
	const { handleSetUserSearch, userSearch } = useContext(CharactersContext);
	return (
		<StyledNavbarContainer>
			<StyledLogo />
			<StyledResponsiveContainer>
				<SearchSVG />
				<StyledInput
					value={userSearch}
					onChange={e => handleSetUserSearch(e.target.value)}
				/>
				<StarSVG />
			</StyledResponsiveContainer>
		</StyledNavbarContainer>
	);
}
