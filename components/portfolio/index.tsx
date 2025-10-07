"use client";
import { certifications, PROJECTS, workExperience } from "@/lib/constants";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { motion } from "motion/react";
import { Briefcase, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="z-50">
      <div className="container flex flex-wrap items-center justify-center p-4">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-semibold text-[var(--text-black-700)] mb-4"
        >
          What I&apos;ve been doing
        </motion.h3>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 w-full"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-black-700)] mb-7 flex items-center gap-2 text-center">
            <Briefcase className="w-7 h-6" /> Projects
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  scale: {
                    type: "tween",
                    damping: 25,
                    stiffness: 120,
                  },
                }}
              >
                <PortfolioCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 max-w-screen-2xl w-full mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--text-black-700)] mb-7 flex items-center gap-2">
            <Award className="w-7 h-6" /> Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1,
                  scale: {
                    type: "tween",
                    damping: 25,
                    stiffness: 120,
                  },
                }}
                className="flex items-center gap-4 p-6 bg-[var(--bg-black-50)] rounded-xl hover:bg-[var(--bg-black-100)] transition-all duration-300"
              >
                <Image
                  src={cert.icon}
                  alt={`${cert.issuer} icon`}
                  width={150}
                  height={100}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h4 className="text-lg font-semibold text-[var(--text-black-900)]">
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
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--text-black-700)]"></div>
            {workExperience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-8 flex items-start gap-4"
              >
                <div className="absolute w-4 h-4 bg-[var(--text-black-700)] rounded-full left-0 translate-x-1/2 mt-2" />
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-[var(--text-black-900)]">
                    {exp.role} @{" "}
                    <Link className="hover:underline" href={exp.link}>
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
    </main>
  );
}
