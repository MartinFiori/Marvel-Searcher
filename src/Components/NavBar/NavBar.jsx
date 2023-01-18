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
import { Link } from "react-router-dom";

export default function NavBar() {
	const { handleSetUserSearch, userSearch } = useContext(CharactersContext);
	return (
		<StyledNavbarContainer>
			<Link to="/" style={{ height: "100%", width: "auto" }}>
				<StyledLogo />
			</Link>
			<StyledResponsiveContainer>
				<SearchSVG />
				<StyledInput
					value={userSearch}
					onChange={e => handleSetUserSearch(e.target.value)}
				/>
				<Link to="/favorites">
					<StarSVG />
				</Link>
			</StyledResponsiveContainer>
		</StyledNavbarContainer>
	);
}
