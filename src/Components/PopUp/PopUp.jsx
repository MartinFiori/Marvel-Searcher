import React, { useContext, useEffect } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import FilledIconStarSVG from "../../SVG/FilledIconStarSVG";
import IconStarSVG from "../../SVG/IconStarSVG";
import {
	StyledOverlay,
	StyledContent,
	StyledBtn,
	StyledSeriesContainer,
	StyledListItemContent,
} from "./PopUp.styles";

const PopUp = ({ setIsModalOpen }) => {
	const { selected, setSelected, favorites, handleToggleFavorite } =
		useContext(CharactersContext);
	const isFavorite = serie => {
		return favorites.find(el => el.id === serie.id);
	};
	useEffect(() => {
		return () => {
			setSelected([]);
		};
	}, [setSelected]);
	return (
		<div>
			<StyledOverlay />
			<StyledContent>
				<StyledBtn onClick={() => setIsModalOpen(prev => !prev)}>
					&times;
				</StyledBtn>
				{selected.count && selected.results.length ? (
					<StyledSeriesContainer>
						{selected.results.map(el => {
							const IMG_URL = `${el.thumbnail.path}.${el.thumbnail.extension}`;
							return (
								<Link key={el.id} to={`/details/${el.id}`}>
									<img src={IMG_URL} alt={el.title} />
									<StyledListItemContent>
										<h4>
											{el.title}{" "}
											<span>
												{isFavorite(el) ? (
													<FilledIconStarSVG
														color="#d3d3d3"
														onClick={e => {
															e.stopPropagation();
															handleToggleFavorite(
																el
															);
														}}
													/>
												) : (
													<IconStarSVG
														color="#d3d3d3"
														onClick={e => {
															e.stopPropagation();
															handleToggleFavorite(
																el
															);
														}}
													/>
												)}
											</span>
										</h4>
										<p>{el.description}</p>
									</StyledListItemContent>
								</Link>
							);
						})}
					</StyledSeriesContainer>
				) : (
					<Spinner />
				)}
			</StyledContent>
		</div>
	);
};

export default PopUp;
