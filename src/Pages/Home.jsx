import { useEffect, useState, useRef } from "react";
import DisplayCard from "../UI/DisplayCard";
import { motion, AnimatePresence } from "framer-motion";
import EyeAnimation from "../animations/EyeAnimation";
import HomeSocials from "../UI/HomeSocials";

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
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting((prev) => {
        const currentIndex = greetings.findIndex(
          (g) => g.greeting === prev.greeting
        );
        const nextIndex = (currentIndex + 1) % greetings.length;
        return greetings[nextIndex];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <DisplayCard className="relative overflow-hidden">
      <div
        className="absolute bottom-14 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0"
        ref={containerRef}
      >
        <EyeAnimation scale={3} />
      </div>

      <div className="container text-[var(--text-black-900)] text-center h-screen flex flex-col gap-8 items-center justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={greeting.greeting}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block w-36 mx-auto rounded-lg px-2 py-1 text-center capitalize mb-8 bg-[var(--bg-black-100)] text-md font-semibold relative group"
            title={greeting.language}
            whileHover={{ scale: 1.05 }}
          >
            {greeting.greeting}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 0, y: -10 }}
              whileHover={{ opacity: 1, y: -30 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-[var(--text-black-900)] text-white rounded shadow-lg"
            >
              ({greeting.language})
            </motion.span>
          </motion.span>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl font-semibold"
        >
          I am
        </motion.p>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="capitalize text-[var(--text-black-900)] leading-none font-extrabold text-5xl md:text-[6rem]"
          whileHover={{ rotate: 1 }}
        >
          Mark{" "}
          <span className='text-[var(--skin-color)] font-["Clicker_Script",_cursive]'>
            Ndubuisi
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-3xl font-semibold md:text-5xl">
            I am a{" "}
            <span className="text-[var(--skin-color)] cursor-pointer hover:underline hover:text-[var(--skin-color-dark)] transition-colors duration-300 text-[2rem] md:text-5xl inline-block relative group">
              Frontend Developer
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: -10 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-[var(--text-black-900)] text-white rounded shadow-lg"
              >
                Click to learn more!
              </motion.span>
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full md:w-1/2 mx-auto"
          whileInView={{ scale: 1.1 }}
          viewport={{ once: true }}
        >
          <HomeSocials />
        </motion.div>
      </div>
    </DisplayCard>
  );
}

export default Home;
