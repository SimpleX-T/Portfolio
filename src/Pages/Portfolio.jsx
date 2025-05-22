import DisplayCard from "../components/DisplayCard";
import { PROJECTS } from "../../lib/constants";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import { motion } from "motion/react";
import { Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";

const certifications = [
  {
    id: 1,
    title: "Fundamentals of Deep Learning",
    issuer: "Nvidia Deep Learning Institute",
    year: "2025",
    icon: "/nvidia_icon.svg",
  },
  {
    id: 2,
    title: "Arit Developer Circle Hackathon",
    issuer: "Arit Developer Circle",
    year: "2025",
    icon: "/adc_icon.png",
  },
];

const workExperience = [
  {
    id: 1,
    role: "Frontend Developer",
    link: "https://www.linkedin.com/company/tetmart-nigeria/",
    company: "Tetmart Nigeria",
    period: "Aug 2024 - Jan 2025",
    description:
      "Developed a specialized e-commerce platform for higher education institutions using React, featuring secure payments, user authentication, an intuitive product catalog with advanced filtering, real-time inventory management, and a responsive, high-performance shopping experience optimized for Nigerian students.",
  },
];

function Portfolio() {
  return (
    <DisplayCard>
      <div className="container flex flex-wrap items-center justify-center p-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          My Portfolio
        </motion.h2>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-black-700)] mb-7 flex items-center gap-2">
            <Briefcase className="w-7 h-6" /> Projects
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <PortfolioCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 max-w-screen-2xl w-full mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-black-700)] mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" /> Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-[var(--bg-black-50)] rounded-lg shadow-sm hover:shadow-lg hover:bg-[var(--bg-black-100)] transition-all duration-300"
              >
                <img
                  src={cert.icon}
                  alt={`${cert.issuer} icon`}
                  className="w-10 h-10"
                />
                <div>
                  <h4 className="text-lg font-medium text-[var(--text-black-900)]">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-[var(--text-black-700)]">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16 max-w-screen-2xl w-full mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-black-700)] mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" /> Work Experience
          </h3>
          <div className="relative pl-8">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--text-black-700)]"></div>
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-8 flex items-start gap-4"
              >
                {/* Timeline Dot */}
                <div className="absolute w-4 h-4 bg-[var(--text-black-700)] rounded-full left-0 translate-x-1/2 mt-2" />
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-[var(--text-black-900)]">
                    {exp.role} @{" "}
                    <Link className="hover:underline" to={exp.link}>
                      {exp.company}
                    </Link>
                  </h4>
                  <p className="text-sm text-[var(--text-black-700)] mb-2">
                    {exp.period}
                  </p>
                  <p className="text-[var(--text-black-700)]">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </DisplayCard>
  );
}

export default Portfolio;
