import { Link } from "react-router-dom";

const skills = [
	"HTML5",
	"CSS3",
	"JavaScript (ES6+)",
	"TypeScript",
	"React.js",
	"NextJS",
	"Java",
	"Solidity",
	"Tailwind CSS",
	"Responsive Web Design",
	"Version Control (Git)",
];

function SkillsList({ skills }) {
	return skills.map((skill, index) => (
		<span
			className='px-3 py-1 bg-[var(--bg-black-50)] text-[var(--text-black-700)] rounded-full text-sm'
			key={index}>
			{skill}
		</span>
	));
}

function About() {
	return (
		<section className='section grid place-items-center'>
			<div className='container md:w-3/4'>
				<h2>About</h2>
				<div className='flex flex-col md:flex-row gap-8 mt-12'>
					<div className='w-full md:w-1/2'>
						<h3 className='text-2xl font-semibold mb-4 text-[var(--text-black-700)]'>
							Who am I?
						</h3>
						<p className='text-[var(--text-black-700)] mb-4'>
							I&apos;m Mark Ndubuisi, a passionate Frontend
							Developer with a keen eye for creating beautiful and
							functional user interfaces. With a strong foundation
							in HTML, CSS, and JavaScript, I specialize in
							building responsive and intuitive web applications.
						</p>
						<p className='text-[var(--text-black-700)] mb-4'>
							My journey in web development started with a
							curiosity for how things work on the internet. This
							curiosity has evolved into a full-fledged career
							where I continuously strive to learn and implement
							the latest technologies and best practices in
							frontend development.
						</p>
						<Link to=''></Link>
					</div>
					<div className='w-full md:w-1/2'>
						<h3 className='text-2xl text-[var(--text-black-700)] font-semibold mb-4'>
							My Skills
						</h3>
						<div className='flex flex-wrap gap-2'>
							<SkillsList skills={skills} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default About;
