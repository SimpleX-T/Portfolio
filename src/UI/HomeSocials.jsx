import { motion } from "framer-motion";

const HomeSocials = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/SimpleX-T",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mark-tochukwu-306b06298",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://x.com/devtochukwu",
      icon: "twitter",
    },
  ];

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[var(--skin-color)] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
        >
          {social.name}
        </motion.a>
      ))}
    </div>
  );
};

export default HomeSocials;
