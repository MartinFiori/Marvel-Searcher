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
	const [characters, setCharacters] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	async function randomNumber() {
		try {
			setLoading(true);
			const req = await axios(
				`https://gateway.marvel.com/v1/public/characters?apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77`
			);
			const totalCharacters = req.data.data.total;
			return Math.floor(Math.random() * (totalCharacters - 0 + 1)) + 0;
		} catch (err) {
			console.error(err.message);
		} finally {
			setLoading(false);
		}
	}

	async function FetchRandomCharacter() {
		const randomNum = await randomNumber();
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
			.catch(err => console.error(err.message))
			.finally(() => setLoading(false));
	}

	function filterCharacters(character_name) {
		setLoading(true);
		axios(
			`https://gateway.marvel.com/v1/public/characters?q=${character_name}&apikey=ed5aa221d74a4d0812e9637da4fd9ff2&hash=3cdcd0023e2fbb15efaad3438a70be77`
		)
			.then(data => setCharacters(data.data.data.results))
			.catch(err => console.error(err.message))
			.finally(() => setLoading(false));
	}

	function toggleFavorite(character) {
		setFavorites(favs =>
			favs.some(el => el.id === character.id)
				? favs.filter(el => el.id !== character.id)
				: [...favs, character]
		);
	}

	const state = {
		characters,
		favorites,
		loading,
		FetchRandomCharacter,
		toggleFavorite,
		filterCharacters,
	};

	return (
		<CharactersContext.Provider value={state}>
			{children}
		</CharactersContext.Provider>
	);
};

export { CharactersContext, CharactersProvider };
