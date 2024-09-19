import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme;
		}
		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});
	const [skinColor, setSkinColor] = useState(
		localStorage.getItem("skinColor") || "#ec1839" //feature: allow users to add their own theme, but the themes they choose will only be available on their devices
	);

	function handleSkinColor(color) {
		setSkinColor(color);
		localStorage.setItem("skinColor", color);
	}

	function handleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
	}

	return (
		<ThemeContext.Provider
			value={{ theme, handleTheme, skinColor, handleSkinColor }}>
			{children}
		</ThemeContext.Provider>
	);
}

function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
}
export { ThemeProvider, useTheme };
