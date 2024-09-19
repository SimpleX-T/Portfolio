import { useEffect, useState } from "react";

import SocialSection from "../UI/SocialSection";

const greetings = [
	{ language: "english", greeting: "hello" },
	{ language: "french", greeting: "bonjour" },
	{ language: "spanish", greeting: "hola" },
	{ language: "german", greeting: "hallo" },
	{ language: "italian", greeting: "ciao" },
	{ language: "japanese", greeting: "konnichiwa" },
	{ language: "mandarin", greeting: "ni hao" },
	{ language: "russian", greeting: "zdravstvuyte" },
	{ language: "arabic", greeting: "marhaba" },
	{ language: "portuguese", greeting: "olá" },
	{ language: "hindi", greeting: "namaste" },
];

function Home() {
	const [greeting, setGreeting] = useState(greetings[0]);

	useEffect(function () {
		let iteration = 1;
		setInterval(() => {
			if (iteration === greetings.length) iteration = 0;
			setGreeting(greetings[iteration]);
			iteration += 1;
		}, 2500);
	}, []);

	return (
		<section className='section grid place-items-center'>
			<div className='container text-[var(--text-black-900)] text-center h-1/2 flex flex-col gap-8'>
				<span
					className='inline-block w-36 mx-auto rounded-lg px-2 py-1 text-center capitalize mb-12 bg-[var(--bg-black-100)] text-md font-semibold'
					title={greeting.language}>
					{greeting.greeting}
				</span>
				<p className='text-xl font-semibold'>I am</p>
				<h1 className='capitalize text-[var(--text-black-900)] leading-none font-extrabold text-5xl md:text-[8rem]'>
					Mark{" "}
					<span className='text-[var(--skin-color)] font-["Clicker_Script",_cursive]'>
						ndubuisi
					</span>
				</h1>
				<div>
					<p className='text-3xl font-semibold md:text-5xl'>
						I am a{" "}
						<span className='text-[var(--skin-color)] cursor-pointer hover:underline text-[2rem] md:text-5xl inline-block'>
							Frontend developer
						</span>
					</p>
				</div>
				<div className='w-full md:w-1/2 mx-auto'>
					<SocialSection />
				</div>
			</div>
		</section>
	);
}
export default Home;
