import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DisplayCard from "../UI/DisplayCard";
import { PROJECTS } from "../../lib/constants";

function PortfolioCard({ img, title, description, link, technologies }) {
  return (
    <div className="max-w-sm w-full bg-[var(--bg-card)] rounded-lg shadow-md border border-[var(--bg-black-50)] overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative w-full aspect-video">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-xl font-semibold text-[var(--text-black-900)] mb-2">
          {title}
        </h3>

        {/* Technologies */}
        <div className="flex gap-2 overflow-x-auto mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[var(--bg-black-50)] text-[var(--text-black-700)] text-sm rounded-md whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm flex-1 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Action Button */}
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto px-4 py-2 bg-[var(--skin-color)] text-white rounded-md text-center flex items-center justify-center duration-300 hover:opacity-80 transition-all ease-in-out"
        >
          <span className="mr-2">View Live Project</span>
          <FaExternalLinkAlt />
        </Link>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <DisplayCard>
      <div className="container flex flex-wrap items-center justify-center p-4">
        <h2>Portfolio</h2>
        <div className="container mx-auto px4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-4 gap-8 3xl:grid-cols-5">
            {PROJECTS.map((project) => (
              <PortfolioCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </DisplayCard>
  );
}
export default Portfolio;
