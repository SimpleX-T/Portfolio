import { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = {
  theme: Theme;
  handleTheme: () => void;
  skinColor: string;
  handleSkinColor: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [skinColor, setSkinColor] = useState<string>("#ec1839");

  // Hydrate from localStorage and media query on client
  useEffect(() => {
    try {
      const savedTheme =
        typeof window !== "undefined" ? localStorage.getItem("theme") : null;
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      } else if (typeof window !== "undefined" && window.matchMedia) {
        setTheme(
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        );
      }
      const storedSkin =
        typeof window !== "undefined"
          ? localStorage.getItem("skinColor")
          : null;
      if (storedSkin) {
        setSkinColor(storedSkin);
      }
    } catch {}
  }, []);

  function handleSkinColor(color: string) {
    setSkinColor(color);
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("skinColor", color);
      }
    } catch {}
  }

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
      }
    } catch {}
  }

  return (
    <ThemeContext.Provider
      value={{ theme, handleTheme, skinColor, handleSkinColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
export { ThemeProvider, useTheme };
