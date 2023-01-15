import * as React from "react";

const SvgComponent = props => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={36}
		height={36}
		{...props}
		style={{ transform: "scale(0.8)", cursor: "pointer" }}
	>
		<path
			style={{
				stroke: "#fff",
				fillRule: "nonzero",
				fill: "#fff",
				fillOpacity: 1,
			}}
			d="M35.867 14.125a2.597 2.597 0 0 0-2.074-1.7l-9.367-1.39-4.074-8.453A2.598 2.598 0 0 0 18 1.125a2.598 2.598 0 0 0-2.352 1.457l-4.074 8.453-9.367 1.39c-.96.145-1.762.802-2.07 1.7a2.473 2.473 0 0 0 .601 2.57l6.867 6.856-1.593 9.508a2.503 2.503 0 0 0 1.066 2.476 2.648 2.648 0 0 0 2.754.148L18 31.29l8.168 4.395a2.648 2.648 0 0 0 2.754-.149 2.503 2.503 0 0 0 1.066-2.476l-1.593-9.508 6.867-6.856a2.49 2.49 0 0 0 .605-2.57Zm-9.332 7.66a2.487 2.487 0 0 0-.703 2.176l1.594 9.504-8.168-4.395a2.69 2.69 0 0 0-2.516 0l-8.168 4.395 1.594-9.504a2.487 2.487 0 0 0-.703-2.176L2.598 14.93l9.367-1.395a2.602 2.602 0 0 0 1.96-1.426L18 3.656l4.074 8.453a2.587 2.587 0 0 0 1.957 1.426l9.371 1.395Zm0 0"
		/>
	</svg>
);

export default SvgComponent;
