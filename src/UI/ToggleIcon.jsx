function ToggleIcon({ toggle, handleToggle }) {
	return (
		<div
			className='h-[40px] w-[40px] border border-[var(--bg-black-50)] cursor-pointer fixed z-[100] right-[30px] top-[20px] rounded-[5px] bg-[var(--bg-black-100)] flex items-center justify-center'
			onClick={handleToggle}>
			{!toggle && (
				<span className='h-[4px] w-[18px] bg-[var(--skin-color)] inline-block relative before:content-[""] before:h-[4px] before:w-[18px] before:bg-[var(--skin-color)] before:absolute before:top-[-6px] before:left-0 after:content-[""] after:h-[4px] after:w-[18px] after:bg-[var(--skin-color)] after:absolute after:bottom-[-6px] after:left-0'></span>
			)}
			{toggle && (
				<span className='h-[4px] w-[18px] bg-transparent inline-block relative before:content-[""] before:h-[4px] before:w-[18px] before:bg-[var(--skin-color)] before:transform before:rotate-45 before:absolute before:top-0 before:left-0 after:content-[""] after:h-[4px] after:w-[18px] after:bg-[var(--skin-color)] after:transform after:-rotate-45 after:absolute after:bottom-0 after:left-0'></span>
			)}
		</div>
	);
}
export default ToggleIcon;
