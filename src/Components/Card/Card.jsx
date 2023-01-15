import React, { useContext } from "react";
import { CharactersContext } from "../../Context/CharactersContext.jsx";
import FilledIconStarSVG from "../../SVG/FilledIconStarSVG";
import IconStarSVG from "../../SVG/IconStarSVG";
import {
	StyledBgImg,
	StyledCard,
	StyledItem,
	StyledName,
} from "./Card.styles.js";

export default function Card(props) {
	const { favorites, handleToggleFavorite } = useContext(CharactersContext);
	const IMG_URL = `${props.thumbnail.path}.${props.thumbnail.extension}`;
	const isFavorite = () => {
		return favorites.find(el => el.id === props.id);
	};
	return (
		<StyledCard>
			<StyledBgImg src={IMG_URL} />
			<StyledItem justify="end" height="50px">
				{isFavorite() ? (
					<FilledIconStarSVG
						style={{ cursor: "pointer" }}
						onClick={() => handleToggleFavorite(props)}
					/>
				) : (
					<IconStarSVG
						style={{ cursor: "pointer" }}
						onClick={() => handleToggleFavorite(props)}
					/>
				)}
			</StyledItem>
			<StyledItem justify="start" height="80px">
				<StyledName>{props.name}</StyledName>
			</StyledItem>
		</StyledCard>
	);
}
