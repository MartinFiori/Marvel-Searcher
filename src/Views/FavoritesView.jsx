import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import FavoritesContainer from "../Components/FavoritesContainer/FavoritesContainer";
import { CharactersContext } from "../Context/CharactersContext";

export default function FavoritesView() {
	const { userSearch } = useContext(CharactersContext);
	return userSearch ? <Navigate to="/" /> : <FavoritesContainer />;
}
