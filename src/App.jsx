import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { ThemeProvider } from "./Services/ThemeContext";

function App() {
	return (
		<>
			<ThemeProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route
								index
								element={
									<Navigate
										replace
										to='home'
									/>
								}
							/>
							<Route
								path='home'
								element={<Home />}
							/>
							<Route
								path='portfolio'
								element={<Portfolio />}
							/>
							<Route
								path='about'
								element={<About />}
							/>
							<Route
								path='contact'
								element={<Contact />}
							/>
						</Route>
						<Route
							path='*'
							element={<ErrorPage />}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}
export default App;
