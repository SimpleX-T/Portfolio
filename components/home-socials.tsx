import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const HomeSocials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/SimpleX-T",
      icon: <BsGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/devtochukwu",
      icon: <BsLinkedin />,
    },
    {
      name: "Twitter",
      url: "https://x.com/devtochukwu",
      icon: <BsTwitterX />,
    },
  ];

  return (
    <div className="flex justify-center gap-4 transition-all duration-500 ease-in-out">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[var(--skin-color)] transition-all duration-500 ease-in-out flex items-center gap-1 group relative"
        >
          {social.icon}
          <span className="w-0 overflow-hidden group-hover:w-full transition-all duration-500 ease-in-out origin-left">
            {social.name}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default HomeSocials;
