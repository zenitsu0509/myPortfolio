import type { ReactNode } from 'react';

export interface ExperienceItem {
  company: string;
  title: string;
  dates: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  years: string;
  gpa?: string;
  details: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  dataAiHint: string;
  liveDemo: string;
  githubLink: string;
}

export interface Achievement {
  icon: ReactNode;
  title: string;
  organization: string;
  date: string;
  description: string;
}
