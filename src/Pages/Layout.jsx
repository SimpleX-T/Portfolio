import { Outlet } from "react-router-dom";
import { useState } from "react";

import "../CSS/main.css";
import Aside from "../UI/Aside";
import ToggleIcon from "../UI/ToggleIcon";
import StyleSwitcher from "../UI/StyleSwitcher";
import { useTheme } from "../Services/ThemeContext";

function Layout() {
	const [toggle, setToggle] = useState(false);
	const { theme, skinColor } = useTheme();

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div
			className={`layout ${theme}`}
			style={{ "--skin-color": skinColor }}>
			{/* toggle button */}
			<ToggleIcon
				toggle={toggle}
				handleToggle={handleToggle}
			/>
			{/* sidebar */}
			<div
				className={`overlay w-full h-full hidden md:block backdrop-blur-[14px] z-10 fixed transform transition-transform duration-200 ease-in-out ${
					toggle ? "translate-y-[0%]" : "-translate-y-[100%]"
				}`}
				onClick={() => setToggle(false)}></div>
			<Aside
				toggle={toggle}
				setToggle={setToggle}
			/>
			{/* main */}
			<main className='w-full h-[100vh]'>
				<StyleSwitcher />
				<Outlet />
			</main>
		</div>
	);
}
export default Layout;
