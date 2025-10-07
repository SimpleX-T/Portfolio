import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { BsGithub } from "react-icons/bs";

type TeamMember = { name: string; pfp: string; github: string };
type Project = {
  id: number;
  img: string;
  title: string;
  description: string;
  isTeamProject: boolean;
  teamMembers?: TeamMember[];
  link: string;
  github: string;
  technologies: string[];
};

export default function PortfolioCard({ project }: { project: Project }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="px-3">
        <SheetHeader>
          <SheetTitle>{project.title}</SheetTitle>
        </SheetHeader>
        <div className="mb-4">
          <Image
            src={project.img}
            alt={project.title}
            width={600}
            height={340}
            className="rounded-lg w-full h-auto object-cover mb-4"
            style={{ maxHeight: 220 }}
          />
          <SheetDescription className="mb-2">
            {project.description}
          </SheetDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-[var(--bg-black-100)] text-xs text-[var(--text-black-800)] px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.isTeamProject && project.teamMembers && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm text-[var(--text-black-700)] mb-1">
                Team Members:
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.teamMembers.map((member) => (
                  <div key={member.github} className="flex items-center gap-2">
                    <Image
                      src={member.pfp}
                      alt={member.name}
                      width={28}
                      height={28}
                      className="rounded-full w-7 h-7 object-cover"
                    />
                    <span className="text-sm text-[var(--text-black-900)]">
                      {member.name}
                    </span>
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black"
                      aria-label={`GitHub profile of ${member.name}`}
                    >
                      <BsGithub size={16} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-black-800)] hover:underline"
            >
              <BsGithub size={18} />
              <span className="text-sm">GitHub</span>
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--text-black-800)] hover:underline"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Live</span>
            </Link>
          )}
        </div>

        <SheetFooter className="mt-6">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
        </SheetFooter>
      </SheetContent>

      <figure className="hidden md:block w-full border border-[var(--bg-black-50)] overflow-hidden relative group rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Image Section */}
        <div className="relative w-full aspect-video">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>

        {/* Content Section */}
        <figcaption className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent backdrop-blur-sm translate-y-full group-hover:translate-y-0 flex-1 hidden md:flex flex-col p-4 align-end justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="pr-32 pl-4">
            <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
              {project.title}
            </h3>
            {/* Description */}
            <p className="text-gray-300 text-sm flex-1 mb-3 line-clamp-2">
              {project.description}
            </p>
            {/* <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 text-xs text-white px-2 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div> */}
            {/* {project.isTeamProject && project.teamMembers && (
              <div className="flex flex-wrap gap-2 items-center mb-2">
                {project.teamMembers.map((member) => (
                  <div key={member.github} className="flex items-center gap-1">
                    <Image
                      src={member.pfp}
                      alt={member.name}
                      width={20}
                      height={20}
                      className="rounded-full w-5 h-5 object-cover"
                    />
                    <span className="text-xs text-white">{member.name}</span>
                  </div>
                ))}
              </div>
            )} */}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-3">
            <SheetTrigger asChild>
              <button className="text-white bg-black/60 px-3 py-1 rounded hover:bg-black/80 transition">
                More Details
              </button>
            </SheetTrigger>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-black/60 p-2 rounded hover:bg-black/80 transition"
                aria-label="Open live project"
              >
                <ExternalLink size={18} />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-black/60 p-2 rounded hover:bg-black/80 transition"
                aria-label="Open GitHub repository"
              >
                <BsGithub size={18} />
              </Link>
            )}
          </div>
        </figcaption>
      </figure>

      <SheetTrigger className="md:hidden" asChild>
        <div className="relative w-full aspect-video">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
      </SheetTrigger>
    </Sheet>
  );
}
