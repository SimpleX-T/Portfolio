import { useEffect, useState, useRef } from "react";
import { FaCog, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../Services/ThemeContext";

function ColorIcon({ color, onClick }) {
	return (
		<button
			className='w-8 h-8 rounded-full border border-[var(--text-black-900)] cursor-pointer'
			style={{ backgroundColor: color }}
			onClick={() => {
				onClick(color);
			}}></button>
	);
}

function StyleSwitcher() {
	const [isOpen, setIsOpen] = useState(false);
	const { theme, handleTheme, handleSkinColor } = useTheme();
	const styleSwitcherRef = useRef(null);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		function handleOutsideClick(event) {
			if (
				styleSwitcherRef.current &&
				!styleSwitcherRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		}

		function handleScroll() {
			setIsOpen(false);
		}

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<div
			ref={styleSwitcherRef}
			className={`fixed flex items-center justify-evenly transition-all duration-300 transform ${
				isOpen ? "translate-x-0" : "translate-x-full"
			} ease-in-out top-[8rem] right-1 p-2 w-[200px] h-[60px] bg-[var(--bg-black-100)] text-[var(--text-black-900)] rounded-lg`}>
			<span className='toggle text-[var(--text-black-900)] absolute top-1/4 -left-8 -translate-y-1/2 transform cursor-pointer'>
				<FaCog onClick={handleClick} />
			</span>
			<span className='toggle text-[var(--text-black-900)] absolute top-3/4 -left-8 -translate-y-1/2 transform cursor-pointer'>
				{theme === "light" ? (
					<FaMoon onClick={handleTheme} />
				) : (
					<FaSun onClick={handleTheme} />
				)}
			</span>
			{["#ec1839", "#fa5b0f", "#37b182", "#1854b4", "#f021b2"].map(
				(color, index) => (
					<ColorIcon
						key={index}
						color={color}
						onClick={handleSkinColor}
					/>
				)
			)}
		</div>
	);
}

export default StyleSwitcher;
