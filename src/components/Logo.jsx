import { Link } from "react-router-dom";

function Logo({ setToggle }) {
	return (
		<div
			className='absolute top-[50px] text-3xl capitalize select-none'
			onClick={() => setToggle(false)}>
			<Link
				to='/'
				className='text-[var(--text-black-900)] font-bold p-5 block logo text-[30px] tracking-[5px] relative before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-[20px] before:h-[20px] before:border-b-[5px] before:border-l-[5px] before:border-[var(--skin-color)] after:content-[""] after:absolute after:top-0 after:right-0 after:w-[20px] after:h-[20px] after:border-t-[5px] after:border-r-[5px] after:border-[var(--skin-color)]'>
				<span className='block  font-["Poppins",_sans-serif] text-[30px] tracking-[1px]'>
					MR
				</span>
				<span className='block font-["Poppins",_sans-serif] text-[30px] tracking-[1px]'>
					ND
				</span>
			</Link>
		</div>
	);
}
export default Logo;
