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
    name: 'Arya Bhatt Hostel Chatbot',
    description: 'AI-powered chatbot using NLP, Pinecone, and Hugging Face for real-time Q&A. Features a user-friendly Streamlit interface with chat history.',
    technologies: ['Python', 'Streamlit', 'Pinecone', 'Hugging Face', 'NLP'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chatbot interface',
    liveDemo: 'https://aryaai.streamlit.app/',
    githubLink: 'https://github.com/zenitsu0509/ARYA-Chatbot',
  },
  {
    name: 'LinkedIn Post Generator',
    description: 'A Streamlit app to generate engaging LinkedIn posts using LangChain and ChatGroq API. Features customization for topic, length, and language, with few-shot learning for consistent style.',
    technologies: ['Python', 'Streamlit', 'LangChain', 'ChatGroq API'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'social media generator',
    liveDemo: 'https://linkdin-post-generator.streamlit.app/',
    githubLink: 'https://github.com/zenitsu0509/Linkdin-Post-generator',
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
