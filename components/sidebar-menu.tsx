import Link from "next/link";
import { FaHome, FaBriefcase, FaUser, FaEnvelope } from "react-icons/fa";

import Logo from "./logo";

type AsideProps = { toggle: boolean; setToggle: (value: boolean) => void };

function Aside({ toggle, setToggle }: AsideProps) {
  const translateX = toggle ? "0%" : "100%";

  return (
    <aside
      style={{ transform: `translateX(${translateX})` }}
      className={`w-full transition-all duration-300 flex flex-col md:w-[250px] z-50 bg-[var(--bg-black-100)] fixed right-0 top-0 p-[30px] h-full border-r border-[var(--bg-black-50)] justify-center items-center`}
    >
      <Logo setToggle={setToggle} />
      <nav className="mt-[50px]">
        <li className="block mb-[20px]" onClick={() => setToggle(false)}>
          <Link
            className="text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]"
            href="/"
          >
            <span>
              <FaHome />
            </span>
            <span>Home</span>
          </Link>
        </li>

        <li className="block mb-[20px]" onClick={() => setToggle(false)}>
          <Link
            className="text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]"
            href="/portfolio"
          >
            <span>
              <FaBriefcase />
            </span>
            <span>Portfolio</span>
          </Link>
        </li>

        <li className="block mb-[20px]" onClick={() => setToggle(false)}>
          <Link
            className="text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]"
            href="/about"
          >
            <span>
              <FaUser />
            </span>
            <span>About</span>
          </Link>
        </li>

        <li className="block mb-[20px]" onClick={() => setToggle(false)}>
          <Link
            className="text-xl font-semibold flex items-center gap-2 border-b border-[var(--bg-black-50)] text-[var(--text-black-900)] py-[5px] px-[15px]"
            href="/contact"
          >
            <span>
              <FaEnvelope />
            </span>
            <span>Contact</span>
          </Link>
        </li>
      </nav>
    </aside>
  );
}
export default Aside;
