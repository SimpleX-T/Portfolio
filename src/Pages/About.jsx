import EyeAnimation from "../animations/EyeAnimation";
import DisplayCard from "../UI/DisplayCard";

const skills = [
  { label: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
  { label: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
  {
    label: "Tailwind CSS",
    icon: "https://img.icons8.com/color/48/000000/tailwindcss.png",
  },
  {
    label: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  {
    label: "Responsive Web Design",
    icon: "https://img.icons8.com/?size=100&id=KjPwn6Tz1iuz&format=png&color=000000",
  },
  {
    label: "React",
    icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
  },
  {
    label: "TypeScript",
    icon: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  {
    label: "NextJS",
    icon: "https://img.icons8.com/color/48/000000/nextjs.png",
  },
  { label: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" },
  {
    label: "Java",
    icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
  },
  {
    label: "Solidity",
    icon: "https://img.icons8.com/color/48/000000/solidity.png",
  },
];

function SkillsList({ skills }) {
  return skills.map((skill, index) => (
    <div
      className="flex gap-2 text-xs px-3 py-1 bg-[var(--bg-black-50)] text-[var(--text-black-700)] rounded-md group cursor-pointer"
      key={index}
    >
      <img
        src={skill.icon}
        alt={`${skill.label.slice(0, 1)} ${skill.label.slice(1, 2)}`}
        className="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0"
      />
      <span className="text-sm">{skill.label}</span>
    </div>
  ));
}

function About() {
  const handleDownload = () => {
    const pdfUrl = "/Updated_Resume-Mark.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Mark_Ndubuisi-Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <DisplayCard>
      <div className="container md:w-3/4">
        <h2>About</h2>
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--text-black-700)]">
              Who am I?
            </h3>
            <p className="text-[var(--text-black-700)] mb-4">
              I&apos;m Mark Ndubuisi, a passionate Frontend Developer with a
              keen eye for creating beautiful and functional user interfaces.
              With a strong foundation in HTML, CSS, and JavaScript, I
              specialize in building responsive and intuitive web applications.
            </p>
            <p className="text-[var(--text-black-700)] mb-4">
              My journey in web development started with a curiosity for how
              things work on the internet. This curiosity has evolved into a
              full-fledged career where I continuously strive to learn and
              implement the latest technologies and best practices in frontend
              development.
            </p>
            <button
              className="bg-[var(--bg-black-50)] text-[var(--text-black-700)] p-2 rounded-lg"
              onClick={handleDownload}
            >
              My Resume
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl text-[var(--text-black-700)] font-semibold mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillsList skills={skills} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 opacity-30"
        // ref={containerRef}
      >
        <EyeAnimation scale={3} />
      </div>
    </DisplayCard>
  );
}
export default About;
