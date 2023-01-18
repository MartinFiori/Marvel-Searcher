import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailContainer from "../Components/DetailContainer/DetailContainer";
import HomeView from "./HomeView";
import Spinner from "../Components/Spinner/Spinner";
import { CharactersContext } from "../Context/CharactersContext";

export default function DetailView() {
	const { userSearch } = useContext(CharactersContext);
	const [comic, setComic] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();
	useEffect(() => {
		setIsLoading(true);
		axios(
			`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77`
		)
			.then(res => {
				setComic(res.data.data.results[0]);
				console.log(res.data.data.results[0]);
			})
			.finally(() => setIsLoading(false));
	}, [id]);
	return !isLoading ? (
		userSearch ? (
			<HomeView />
		) : (
			<DetailContainer {...comic} />
		)
	) : (
		<Spinner />
	);
}
