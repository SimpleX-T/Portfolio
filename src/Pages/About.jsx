import EyeAnimation from "../animations/EyeAnimation";
import { useState } from "react";
import DisplayCard from "../components/DisplayCard";
import DriveModal from "../components/about/DriveModal";
import { motion } from "motion/react"; // For animations

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
    <motion.div
      key={index}
      className="flex items-center gap-3 px-4 group py-2 bg-[var(--bg-black-50)] text-[var(--text-black-700)] rounded-lg shadow-sm hover:shadow-lg hover:bg-[var(--bg-black-100)] transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <img
        src={skill.icon}
        alt={`${skill.label} icon`}
        className="w-8 h-8 transition-all duration-300 grayscale group-hover:grayscale-0"
      />
      <span className="text-sm font-medium">{skill.label}</span>
    </motion.div>
  ));
}

function About() {
  const [showModal, setShowModal] = useState(false);
  const fileId =
    "https://drive.google.com/file/d/1JyOSKd6bHMeieb2Mgjfm059xH3Q61ZAJ/preview";

  return (
    <DisplayCard>
      <div className="container md:w-3/4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 py-12"
        >
          <h2 className="mb-12">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center mb-6 md:mb-0"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-black-700)] mb-4">
                Who am I?
              </h3>
              <p className="text-[var(--text-black-700)] text-base sm:text-lg mb-6 leading-relaxed">
                Yo, I&apos;m Tochukwu, a Frontend Developer with a passion for
                crafting clean UIs and smooth interactions. I&apos;m all about
                mind-growth, weird, and mystery books, but coding keeps me up
                more than late-night page-turners.
              </p>
              <p className="text-[var(--text-black-700)] text-base sm:text-lg mb-6 leading-relaxed">
                My browser tabs? A wild mix of docs, Stack Overflow, and book
                summaries I&apos;ll *totally* finish someday. I thrive on
                challenges, lose sleep over bugs, and live for that moment when
                the code just *works*. Let&apos;s build something dope together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="bg-[var(--bg-black-50)] text-[var(--text-black-700)] px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[var(--bg-black-100)] transition-colors duration-300 w-fit"
              >
                Check My Resume
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-black-700)] mb-4">
                <del className="opacity-30">My Skills</del> Tech Stack
              </h3>
              <p className="text-[var(--text-black-700)] text-base sm:text-lg mb-6">
                While I have soooo many skills, that I can&apos;t list here,
                these are my stacks:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <SkillsList skills={skills} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 opacity-30">
        <EyeAnimation scale={4} />
      </div>

      <DriveModal
        show={showModal}
        onClose={() => setShowModal(false)}
        fileId={fileId}
      />
    </DisplayCard>
  );
}

export default About;
