import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const CharactersContext = createContext();
/* 
https://gateway.marvel.com/v1/public/characters?apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77
*/

// const RANDOM_IMG_FROM_LOCALSTORAGE = JSON.parse(
// 	localStorage.getItem("randomImg")
// );

const CharactersProvider = ({ children }) => {
	const [characters, setCharacters] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [userSearch, setUserSearch] = useState("");
	const [selected, setSelected] = useState({});

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	async function handleRandomNumber() {
		try {
			const req = await axios(
				`https://gateway.marvel.com/v1/public/characters?apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77`
			);
			const totalCharacters = req.data.data.total;
			return Math.floor(Math.random() * (totalCharacters - 0 + 1)) + 0;
		} catch (err) {
			console.error(err.message);
		}
	}

	async function handleFetchRandomCharacter() {
		const randomNum = await handleRandomNumber();
		axios(
			`https://gateway.marvel.com/v1/public/characters?&apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77`,
			{
				params: {
					offset: randomNum,
					limit: 1,
				},
			}
		)
			.then(data => {
				return data.data.data.results[0];
			})
			.catch(err => console.error(err.message));
	}

	function handleFilterCharacters(value) {
		if (value) {
			axios(
				`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&limit=100&apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77`
			)
				.then(data => {
					setCharacters(data.data.data);
				})
				.catch(err => console.error(err));
		}
	}

	function handleToggleFavorite(character) {
		console.log(character);
		setFavorites(favs =>
			favs.some(el => el.id === character.id)
				? favs.filter(el => el.id !== character.id)
				: [...favs, character]
		);
	}

	function handleSetUserSearch(search) {
		search = search.toLowerCase();
		setUserSearch(search);
		handleFilterCharacters(search);
	}

	async function handleSearchSeries(character) {
		setIsModalOpen(true);
		if (character) {
			try {
				const req = await axios(
					`https://gateway.marvel.com:443/v1/public/characters/${character.id}/series?&apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77&limit=100`
				);
				console.log(req.data.data);
				setSelected(req.data.data);
			} catch (err) {
				console.log(err);
			}
		}
	}

	const state = {
		characters,
		favorites,
		userSearch,
		isModalOpen,
		selected,
		handleFetchRandomCharacter,
		handleToggleFavorite,
		handleFilterCharacters,
		handleSetUserSearch,
		handleSearchSeries,
		setIsModalOpen,
		setSelected,
	};

	return (
		<CharactersContext.Provider value={state}>
			{children}
		</CharactersContext.Provider>
	);
};

export { CharactersContext, CharactersProvider };
