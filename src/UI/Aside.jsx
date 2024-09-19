import { NavLink } from "react-router-dom";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";

import Logo from "../UI/Logo";

function Aside({ toggle, setToggle }) {
	const translateX = toggle ? "0%" : "100%";

	return (
		<aside
			style={{ transform: `translateX(${translateX})` }}
			className={`w-full transition-all duration-300 flex flex-col md:w-[250px] bg-[var(--bg-black-100)] fixed right-0 top-0 p-[30px] h-full border-r border-[var(--bg-black-50)] justify-center items-center z-10`}>
			<Logo setToggle={setToggle} />
			<nav className='mt-[50px]'>
				<li
					className='block mb-[20px]'
					onClick={() => setToggle(false)}>
					<NavLink
						className='text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]'
						to='/'>
						<span>
							<FaHome />
						</span>
						<span>Home</span>
					</NavLink>
				</li>

				<li
					className='block mb-[20px]'
					onClick={() => setToggle(false)}>
					<NavLink
						className='text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]'
						to='/portfolio'>
						<span>
							<FaBriefcase />
						</span>
						<span>Portfolio</span>
					</NavLink>
				</li>

				<li
					className='block mb-[20px]'
					onClick={() => setToggle(false)}>
					<NavLink
						className='text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]'
						to='/about'>
						<span>
							<FaUser />
						</span>
						<span>About</span>
					</NavLink>
				</li>

				<li
					className='block mb-[20px]'
					onClick={() => setToggle(false)}>
					<NavLink
						className='text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]'
						to='/contact'>
						<span>
							<FaEnvelope />
						</span>
						<span>Contact</span>
					</NavLink>
				</li>
			</nav>
		</aside>
	);
}
export default Aside;
