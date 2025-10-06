export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  isTeamProject: boolean;
  teamMembers?: {
    name: string;
    pfp: string;
    github: string;
  }[];
  link: string;
  github: string;
  technologies: string[];
}

export interface Skill {
  label: string;
  icon: string;
}
