import * as React from "react";

const SvgComponent = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={35}
		height={35}
		{...props}
		style={{ transform: "scale(0.9)", cursor: "pointer" }}
	>
		<path
			style={{
				stroke: "none",
				fillRule: "evenodd",
				fill: props.color ? props.color : "#fff",
				fillOpacity: 1,
			}}
			d="m18.559.691 4.492 9.536c.164.363.5.617.89.675l10.043 1.532c.457.086.825.418.961.863.137.441.02.922-.3 1.254l-7.27 7.418c-.281.293-.406.699-.344 1.097l1.719 10.485a1.196 1.196 0 0 1-1.719 1.304l-8.98-4.949a1.149 1.149 0 0 0-1.102 0l-8.98 4.95A1.195 1.195 0 0 1 6.25 33.55l1.719-10.485a1.294 1.294 0 0 0-.344-1.097L.355 14.55a1.268 1.268 0 0 1-.3-1.254c.136-.445.504-.777.96-.863l10.044-1.532c.39-.058.726-.312.89-.675L16.441.69A1.15 1.15 0 0 1 17.5 0c.46 0 .875.27 1.059.691Zm0 0"
		/>
		<path
			style={{
				stroke: "none",
				fillRule: "evenodd",
				fill: props.color ? props.color : "#fff",
				fillOpacity: 1,
			}}
			d="M21.957 7.91a36.68 36.68 0 0 0-7.95 5.746 34.6 34.6 0 0 0-6.386 8.309L.355 14.55a1.259 1.259 0 0 1 .66-2.114l10.04-1.535a1.19 1.19 0 0 0 .894-.675l4.489-9.54A1.163 1.163 0 0 1 17.5 0c.46 0 .875.27 1.063.688Zm0 0"
		/>
	</svg>
);

export default SvgComponent;
