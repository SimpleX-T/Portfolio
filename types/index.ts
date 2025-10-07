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

export interface WorkExperience {
  id: number;
  role: string;
  link: string;
  company: string;
  period: string;
  description: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  icon: string;
}
