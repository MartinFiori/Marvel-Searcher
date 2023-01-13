import React, { createContext, useState, useEffect } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
	const [characters, setCharacters] = useState([]);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const state = {
		characters,
		favorites,
	};

	return (
		<CharactersContext.Provider value={state}>
			{children}
		</CharactersContext.Provider>
	);
};

export { CharactersContext, CharactersProvider };
