import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Section, { SectionTitle } from '../common/Section';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with features like product search, cart, checkout, and user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'online store',
    liveDemo: '#',
    githubLink: '#',
  },
  {
    name: 'Task Management App',
    description: 'A responsive Kanban-style task management application to help users organize their workflows.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'to-do list',
    liveDemo: '#',
    githubLink: '#',
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on performance and design.',
    technologies: ['Astro', 'React', 'Tailwind CSS', 'Markdown'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'personal website',
    liveDemo: '#',
    githubLink: '#',
  },
  {
    name: 'Weather Forecast App',
    description: 'A simple and elegant weather app that provides real-time weather data based on user location.',
    technologies: ['Vue.js', 'OpenWeatherMap API', 'Axios'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'weather chart',
    liveDemo: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="aspect-video relative mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="rounded-t-lg object-cover"
                  data-ai-hint={project.dataAiHint}
                />
              </div>
              <CardTitle>{project.name}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
