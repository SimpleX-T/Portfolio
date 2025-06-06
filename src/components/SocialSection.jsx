import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SocialSection({ color = "var(--bg-black-100)" }) {
  return (
    <div className="flex items-center w-full p-4 mx-auto justify-evenly">
      <Link
        style={{ backgroundColor: color }}
        className="inline-block p-2 rounded-lg  social transition"
        to="https://x.com/intent/follow?screen_name=devtochukwu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="text-2xl transition-colors duration-100 ease-in-out text-[var(--skin-color)] hover:opacity-60" />
      </Link>
      <Link
        style={{ backgroundColor: color }}
        className="inline-block social transition  p-2 rounded-lg"
        to="https://www.linkedin.com/in/mark-ndubuisi-306b06298"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-2xl transition-colors duration-100 ease-in-out text-[var(--skin-color)] hover:opacity-60" />
      </Link>
      <Link
        style={{ backgroundColor: color }}
        className="inline-block social transition  p-2 rounded-lg"
        to="https://github.com/simplex-t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-2xl transition-colors duration-100 ease-in-out text-[var(--skin-color)] hover:opacity-60" />
      </Link>
      <Link
        style={{ backgroundColor: color }}
        className="inline-block social transition  p-2 rounded-lg"
        to="mailto:ntmark2004@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoGmail className="text-2xl transition-colors duration-100 ease-in-out text-[var(--skin-color)] hover:opacity-60" />
      </Link>
    </div>
  );
}
