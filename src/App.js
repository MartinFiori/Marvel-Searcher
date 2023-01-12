import axios from "axios";
import React from "react";
import "./App.css";

function App() {
	const API_URL =
		"https://gateway.marvel.com/v1/public/characters?apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77";
	const [arr, setArr] = React.useState([]);
	const apiCall = async () => {
		try {
			const fetch = await axios(API_URL);
			const {
				data: { data },
			} = fetch;
			console.log(data.results);
			setArr(data.results);
		} catch (err) {
			console.error(err.message);
		}
	};
	React.useEffect(() => {
		apiCall();
	}, []);
	return (
		<div className="App">
			{arr.map((el, i) => (
				<div key={i}>
					<h1>{el.name}</h1>
				</div>
			))}
		</div>
	);
}

export default App;
