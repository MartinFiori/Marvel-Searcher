import React, { useContext, useState, useEffect } from "react";
import FilledIconStarSVG from "../../SVG/FilledIconStarSVG";
import IconStarSVG from "../../SVG/IconStarSVG";
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
	const { handleSetUserSearch, userSearch, setUserSearch } =
		useContext(CharactersContext);
	const [favActive, setFavActive] = useState(true);
	useEffect(() => {
		if (userSearch && favActive) setUserSearch("");
		setFavActive(window.location.pathname === "/favorites");
	}, [userSearch, favActive, setUserSearch]);
	return (
		<StyledNavbarContainer>
			<Link
				to="/"
				style={{ height: "100%", width: "auto" }}
				onClick={() => setFavActive(false)}
			>
				<StyledLogo />
			</Link>
			<StyledResponsiveContainer>
				<SearchSVG />
				<StyledInput
					value={userSearch}
					onChange={e => handleSetUserSearch(e.target.value)}
				/>
				<Link to="/favorites">
					{favActive ? (
						<FilledIconStarSVG
							color="#d3d3d3"
							onClick={() => setFavActive(false)}
						/>
					) : (
						<IconStarSVG
							color="#d3d3d3"
							onClick={() => setFavActive(true)}
						/>
					)}
				</Link>
			</StyledResponsiveContainer>
		</StyledNavbarContainer>
	);
}
