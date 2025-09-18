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
    name: 'AI-Samvad: Multi-Domain AI Interview Platform',
    description: 'Full-stack adaptive AI interview platform for domains like NLP & CV. Real-time audio/video via WebRTC, Whisper STT + multi‑TTS, gaze & browser anti-cheat, automated multi-model (Gemini, Groq, Hugging Face, PlayAI, Whisper) evaluation pipeline with personalized feedback + reporting.',
    technologies: ['Next.js', 'FastAPI', 'TypeScript', 'WebRTC', 'PostgreSQL', 'LLMs', 'Hugging Face', 'PlayAI', 'MediaPipe', 'Azure', 'Vercel'],
    image: '/images/ai-samvad.png',
    dataAiHint: 'ai interview platform ui',
    liveDemo: 'https://ai-samvad.vercel.app/',
    githubLink: 'https://github.com/zenitsu0509/AI-Samvad', 
  },
  {
    name: 'AI-Powered Research Assistant (MCP Server)',
    description: 'Custom MCP-compliant research automation server: natural language literature queries, Arxiv search + metadata extraction, Llama/Llama-8B summarization, GitHub publishing workflow, structured Markdown knowledge base, dual HTTP JSON-RPC + stdio MCP interfaces for Claude & compatible clients.',
    technologies: ['MCP Protocol', 'Python', 'FastAPI', 'JSON-RPC', 'Arxiv API', 'GitHub API', 'PyGitHub', 'Groq API', 'LLMs'],
    image: '/images/mcp-assistant.png',
    dataAiHint: 'research automation server',
    liveDemo: '#', 
    githubLink: 'https://github.com/zenitsu0509/mcp-research-assistant', 
  },
  {
    name: 'Arya Bhatt Hostel Chatbot',
    description: 'AI-powered chatbot using NLP, Pinecone, and Hugging Face for real-time Q&A. Features a user-friendly Streamlit interface with chat history.',
    technologies: ['Python', 'Streamlit', 'Pinecone', 'Hugging Face', 'NLP'],
    image: '/images/arya-image.png',
    dataAiHint: 'chatbot interface',
    liveDemo: 'https://aryaai.streamlit.app/',
    githubLink: 'https://github.com/zenitsu0509/ARYA-Chatbot',
  },
  {
  name: 'License Plate Recognition (YOLOv8 + CRNN)',
  description: 'A complete Automatic License Plate Recognition (ALPR) system. It uses a fine-tuned YOLOv8 model for plate detection and a custom-built CRNN in PyTorch for character recognition, all wrapped in an interactive Gradio web app.',
  technologies: ['Python', 'PyTorch', 'YOLOv8', 'Gradio', 'OpenCV', 'Hugging Face Hub'],
  image: '/images/alpr-system.png',
  dataAiHint: 'Object Detection & OCR',
  liveDemo: 'https://huggingface.co/spaces/zenitsu09/yolo-crnn-plate-Recognition',
  githubLink: 'https://github.com/zenitsu0509/YOLO-CRNN-Plate-Recognition', 
},
  {
    name: 'MEDGraphy',
    description: 'A medicine graph RAG-based project that leverages a knowledge graph for medical information retrieval, providing accurate answers to complex medical queries.',
    technologies: ['Python', 'Streamlit', 'LangChain', 'Neo4j', 'RAG'],
    image: '/images/medgraphy.png',
    dataAiHint: 'medical knowledge graph',
    liveDemo: 'https://madgraphy.streamlit.app/',
    githubLink: 'https://github.com/zenitsu0509/MEDGraphy',
  },
  {
    name: 'Mischief Casino',
    description: 'An online casino website with user authentication, wallet features to add or remove funds, and a variety of games to play.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'NextAuth.js'],
    image: '/images/gemecasino.png',
    dataAiHint: 'online casino website',
    liveDemo: 'https://mischief-casino-project.vercel.app/',
    githubLink: 'https://github.com/zenitsu0509/Mischief-Casino-Project',
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
