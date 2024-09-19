import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
	{
		id: 1,
		img: "/portfolio_images/meta_market.jpg",
		title: "Meta Market",
		description:
			"A webapp that enables NFT artists to store and sell their artworks.",
		link: "https://meta-market-three.vercel.app",
		technologies: ["ReactJS", "Ethers.js", "Web3.js", "RainbowKit"],
	},
	{
		id: 2,
		img: "/portfolio_images/fastreactpizza.jpg",
		title: "Fast React Pizza",
		description: "A Pizza ordering app built in process of tutorials.",
		link: "https://fastpizzaco.vercel.app	",
		technologies: ["ReactJS", "Redux", "Geolocation API"],
	},
	{
		id: 3,
		title: "Project 3",
		description: "Description 3",
		link: "#",
		technologies: ["Technology 5", "Technology 6"],
	},
	{
		id: 4,
		title: "Project 4",
		description: "Description 4",
		link: "#",
		technologies: ["Technology 7", "Technology 8"],
	},
];

function PortfolioCard({ img, title, description, link, technologies }) {
	return (
		<div className='w-full max-w-[350px] md:max-w-[350px] bg-[var(--bg-card)] rounded-lg overflow-hidden border border-[var(--bg-black-50)] grid grid-auto-columns-auto'>
			<img
				src={img}
				alt={title}
				className='w-full h-[200px] object-cover'
			/>
			<div className='p-4 flex flex-col flex-grow'>
				<h3 className='text-xl font-semibold text-[var(--text-black-900)] mb-2'>
					{title}
				</h3>
				<div className='flex flex-wrap gap-2 mb-3'>
					{technologies.map((tech, index) => (
						<span
							key={index}
							className='px-2 py-1 bg-[var(--bg-black-50)] text-[var(--text-black-700)] text-sm rounded-md'>
							{tech}
						</span>
					))}
				</div>
				<p className='text-[var(--text-black-700)] mb-4 flex-grow'>
					{description}
				</p>
				<Link
					to={link}
					target='_blank'
					rel='noopener noreferrer'
					className='px-4 py-2 bg-[var(--skin-color)] text-white rounded-md transition-opacity duration-300 text-center flex items-center justify-center'>
					<span className='mr-2'>View Live Project</span>
					<FaExternalLinkAlt />
				</Link>
			</div>
		</div>
	);
}

function Portfolio() {
	return (
		<section className='section grid place-items-center'>
			<div className='container flex flex-wrap items-center justify-center p-4'>
				<h2>Portfolio</h2>
				<div className='flex w-full my-12 flex-wrap items-center justify-center gap-8 mx-auto'>
					{projects.map((project) => (
						<PortfolioCard
							key={project.id}
							{...project}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
export default Portfolio;
