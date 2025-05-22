import { Github } from "lucide-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PortfolioCard({ project }) {
  return (
    <div className="max-w-sm w-full bg-[var(--bg-card)] rounded-lg shadow-md border border-[var(--bg-black-50)] overflow-hidden flex flex-col relative min-h-[300px] h-full">
      {project.isTeamProject && (
        <div className="group">
          <span className="px-12 py-0.5 bg-[var(--skin-color)] text-white text-xs font-medium absolute top-1 -right-7 translate-y-full translate-x-6 z-10 rotate-45 cursor-pointer">
            Team Project
          </span>
          {/* Tooltip */}
          <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-12 right-0 bg-[var(--bg-black-100)] rounded-lg shadow-lg p-3 z-20 min-w-[200px] border border-[var(--skin-color)]">
            <h4 className="text-sm font-semibold mb-2 text-[var(--text-black-700)]">
              Team Members
            </h4>

            <div className="space-y-2">
              {project.teamMembers?.map((member, index) => (
                <Link
                  key={index}
                  to={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:bg-[var(--bg-black-50)] p-1 rounded-md transition-colors duration-200"
                >
                  {member.pfp && (
                    <img
                      src={member.pfp}
                      alt={member.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  )}
                  <span className="text-sm text-[var(--text-black-700)]">
                    {member.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Section */}
      <div className="relative w-full aspect-video">
        <img
          src={project.img}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-xl font-semibold text-[var(--text-black-900)] mb-2 flex items-center gap-2">
          {project.title}
        </h3>

        {/* Technologies */}
        <div
          className="flex gap-2 overflow-x-auto mb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[var(--bg-black-50)] text-[var(--text-black-700)] text-sm rounded-md whitespace-nowrap hover:bg-[var(--skin-color)] hover:text-white transition-all ease-in-out duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm flex-1 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Action Button */}
        <div className="flex gap-2">
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-4 py-2 bg-[var(--skin-color)] text-white rounded-md text-center flex items-center justify-center duration-300 hover:opacity-80 transition-all ease-in-out flex-1"
          >
            <span className="mr-2">View Live Project</span>
            <FaExternalLinkAlt />
          </Link>

          <Link to={project.github} target="_blank" rel="noopener noreferrer">
            <button className="mt-auto p-2 bg-[var(--bg-black-50)] text-[var(--text-black-700)] rounded-md text-center flex items-center justify-center duration-300 hover:opacity-80 transition-all ease-in-out">
              <Github />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
