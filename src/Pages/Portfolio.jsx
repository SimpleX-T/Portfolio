import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DisplayCard from "../UI/DisplayCard";
import { PROJECTS } from "../../lib/constants";

function PortfolioCard({ img, title, description, link, technologies }) {
  return (
    <div className="w-full max-w-[350px] md:max-w-[350px] min-h-[450px] max-h-[450px] shadow-md bg-[var(--bg-card)] rounded-lg overflow-hidden border border-[#39393910] flex flex-col">
      <div className="w-full h-52 mb-auto">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="px-4 mb-4 min-h-52 mt-3 flex flex-col">
        <h3 className="text-xl font-semibold text-[var(--text-black-900)] mb-2">
          {title}
        </h3>
        <div className="max-w-full overflow-hidden border h-8 max-h-10 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-4 before:bg-gradient-to-r before:from-[#39393910] before:bg-opacity-10 before:backdrop-blur-md before:to-[#39393910] after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-4 after:bg-gradient-to-r after:to-[#39393910] after:bg-opacity-0 after:backdrop-blur-md after:from-[#39393920] via-[#39393920]"></div>
        <div
          className="flex gap-2 mb-3 overflow-x-scroll"
          style={{
            scrollbarWidth: "none",
          }}
        >
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 min-w-fit bg-[#39393910] text-[var(--text-black-700)] text-sm rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p className="text-gray-400 mb-auto text-xs text-ellipsis">
        {description.split(" ").slice(0, 20).join(" ")}
        {description.split(" ").length > 20 && <button>Read More</button>}
      </p>
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-[var(--skin-color)] text-white rounded-md transition-opacity duration-300 text-center flex items-center justify-center"
      >
        <span className="mr-2">View Live Project</span>
        <FaExternalLinkAlt />
      </Link>
    </div>
  );
}

function Portfolio() {
  return (
    <DisplayCard>
      <div className="container flex flex-wrap items-center justify-center p-4">
        <h2>Portfolio</h2>
        <div className="flex w-full my-12 flex-wrap items-center justify-center gap-8 mx-auto">
          {PROJECTS.map((project) => (
            <PortfolioCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </DisplayCard>
  );
}
export default Portfolio;
