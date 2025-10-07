"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import DriveModal from "@/components/about/resume-modal";
import { motion } from "motion/react";
import { skills } from "@/lib/constants";
import { Skill } from "@/types";
import Image from "next/image";
import ScrollReveal from "../scroll-to-reveal";

function SkillsList({ skills }: { skills: Skill[] }) {
  return skills.map((skill, index) => (
    <motion.div
      key={index}
      className="flex-1 justify-center max-w-fit flex items-center gap-3 px-4 group py-2 bg-[var(--bg-black-50)] text-[var(--text-black-700)] rounded-lg shadow-sm hover:shadow-lg hover:bg-[var(--bg-black-100)] transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Image
        src={skill.icon}
        alt={`${skill.label} icon`}
        className="w-8 h-8 transition-all duration-300 grayscale group-hover:grayscale-0"
        width={32}
        height={32}
      />
      <span className="text-sm font-medium">{skill.label}</span>
    </motion.div>
  ));
}

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const fileId = "/docs/Resume.pdf";
  return (
    <main className="min-h-screen md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 py-12"
        >
          <div className=" flex flex-col justify-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center mb-6 md:mb-0 max-w-4xl mx-auto text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-semibold text-[var(--text-black-700)] mb-4">
                Who am I?
              </h3>

              <ScrollReveal
                baseOpacity={0.15}
                textClassName="text-[var(--text-black-700)] text-3xl md:text-4xl font-normal"
                rotationEnd="bottom 80%"
                enableBlur={true}
                containerClassName="mb-12"
                blurStrength={3}
                wordAnimationEnd="bottom 20%"
              >
                Yo, I&apos;m Tochukwu, a Frontend Developer with a passion for
                crafting clean UIs and smooth interactions. I&apos;m all about
                mind-growth, weird, and mystery books, but coding keeps me up
                more than late-night page-turners. My browser tabs? A wild mix
                of docs, Stack Overflow, and book summaries I&apos;ll totally
                finish someday. I thrive on challenges, lose sleep over bugs,
                and live for that moment when the code just works. Let&apos;s
                build something dope together.
              </ScrollReveal>

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
              className="flex flex-col mt-24"
            >
              <h3 className="text-3xl sm:text-4xl font-semibold text-[var(--text-black-700)] mb-4 text-center">
                <del className="opacity-30">My Skills</del> Tech Stack
              </h3>
              <p className="text-[var(--text-black-700)] text-xl md:text-2xl mb-6 text-center">
                While I have soooo many skills, that I can&apos;t list here,
                these are my stacks:
              </p>

              <div className="relative min-h-72">
                <div className="w-full overflow-hidden mt-24 rotate-10 md:rotate-5 -z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-32">
                  <motion.div
                    className="flex items-center gap-4 md:gap-8 w-max"
                    style={{ whiteSpace: "nowrap" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                      duration: 80,
                    }}
                  >
                    <SkillsList skills={skills} />

                    <SkillsList skills={skills} />
                  </motion.div>
                </div>

                <div className="w-full overflow-hidden mt-24 -rotate-10 md:-rotate-5 -z-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-32">
                  <motion.div
                    className="flex items-center gap-4 md:gap-8 w-max"
                    style={{ whiteSpace: "nowrap" }}
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "linear",
                      duration: 80,
                    }}
                  >
                    <SkillsList skills={skills} />

                    <SkillsList skills={skills} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <DriveModal
        show={showModal}
        onClose={() => setShowModal(false)}
        fileId={fileId}
      />
    </main>
  );
}
