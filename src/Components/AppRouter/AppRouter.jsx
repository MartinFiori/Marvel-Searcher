import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../../Views/HomeView";
import FavoritesView from "../../Views/FavoritesView";
import DetailView from "../../Views/DetailView";
import NotFoundView from "../../Views/NotFoundView";
import { CharactersProvider } from "../../Context/CharactersContext";
import Layout from "../../Layout";

const theme = {
	dark: {
		primary: "#000",
		text: "#fff",
	},
	light: {
		primary: "#fff",
		text: "#000",
	},
};

export default function AppRouter() {
	return (
		<CharactersProvider>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route
								path="/details/:id"
								element={<DetailView />}
							/>
							<Route
								path="/favorites"
								element={<FavoritesView />}
							/>
							<Route path="/" element={<HomeView />} />
							<Route path="/*" element={<NotFoundView />} />
						</Routes>
					</Layout>
				</BrowserRouter>
			</ThemeProvider>
		</CharactersProvider>
	);
}
