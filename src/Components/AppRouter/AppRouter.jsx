import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../../Views/HomeView";
import FavoritesView from "../../Views/FavoritesView";
import DetailView from "../../Views/DetailView";
import NotFoundView from "../../Views/NotFoundView";
import { CharactersProvider } from "../../Context/CharactersContext";
import Layout from "../../Layout";

export default function AppRouter() {
	return (
		<CharactersProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/details/:id" element={<DetailView />} />
						<Route path="/favorites" element={<FavoritesView />} />
						<Route path="/" element={<HomeView />} />
						<Route path="/*" element={<NotFoundView />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</CharactersProvider>
	);
}
