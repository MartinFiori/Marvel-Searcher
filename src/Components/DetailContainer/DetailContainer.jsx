import React from "react";
import {
	StyledDetailContainer,
	StyledCard,
	StyledCardContent,
	StyledInfo,
	StyledTitle,
} from "./DetailContainer.styles";

const DetailContainer = ({
	id,
	title,
	description,
	images,
	dates,
	creators: { items },
}) => {
	const IMG_URL = `${images[0].path}.${images[0].extension}`;
	const writer = items.find(el => el.role === "writer")?.name || "Not found";
	const penciler =
		items.find(el => el.role === "penciler")?.name || "Not found";
	const pencilerCover =
		items.find(el => el.role === "penciler (cover)")?.name || "Not found";
	return (
		<StyledDetailContainer>
			<StyledCard>
				<img src={IMG_URL} alt={title} />
				<StyledCardContent>
					<StyledTitle>{title}</StyledTitle>
					<StyledInfo>
						Published:
						<span>{new Date(dates[0].date).toDateString()}</span>
					</StyledInfo>
					<StyledInfo>
						Writer:
						<span> {writer}</span>
					</StyledInfo>
					<StyledInfo>
						Penciler:
						<span> {penciler}</span>
					</StyledInfo>
					<StyledInfo>
						Cover Artist:
						<span> {pencilerCover}</span>
					</StyledInfo>
					<p>{description}</p>
				</StyledCardContent>
			</StyledCard>
		</StyledDetailContainer>
	);
};

export default DetailContainer;
