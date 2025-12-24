
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
}
