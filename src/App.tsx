import { createContext, useState, useEffect } from 'react';
import "./assets/styles/index.scss";
import Title from "./components/Title";
import { TitleColor } from "./global/enums";
import Layout from "./layout";
import Home from "./pages/Home";

const currentTheme: any = document.documentElement.getAttribute("data-theme") ? document.documentElement.getAttribute("data-theme") : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
export const ThemeContext: any = createContext({
  theme: currentTheme == "dark" ? "light" : "dark",
  setTheme: () => {}
});

const App = () => {
	const [theme, setTheme] = useState("dark");
	const value = { theme, setTheme };
	return (
		<ThemeContext.Provider value={value}>
			<Layout>
				<Home />
			</Layout>
		</ThemeContext.Provider>
	)
}

export default App;