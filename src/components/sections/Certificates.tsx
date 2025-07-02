import React from 'react';
import Section, { SectionTitle } from '../common/Section';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '../ui/button';

const certificates = [
  {
    name: "Vibe Coding 101 with Replit",
    organization: "DeepLearning.AI",
    description: "An introductory course to the fundamentals of coding using the Replit online IDE.",
    link: "https://learn.deeplearning.ai/accomplishments/9c4cefed-ea21-43d9-b937-f70cbb42f988?usp=sharing",
  },
  {
    name: "AI Agents in LangGraph",
    organization: "DeepLearning.AI",
    description: "Learned to build and deploy autonomous AI agents using the LangGraph framework.",
    link: "https://learn.deeplearning.ai/accomplishments/cd15c42c-68f5-46ed-92ed-4a751c29c017?usp=sharing",
  },
  {
    name: "Fundamental of AI Agents",
    organization: "Hugging Face",
    description: "A foundational course on the principles and applications of AI agents.",
    link: "https://huggingface.co/spaces/agents-course/unit_1_quiz/discussions/233",
  },
  {
    name: "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation",
    organization: "Google Cloud",
    description: "Gained hands-on experience with model evaluation and MLOps pipelines on Google's Vertex AI.",
    link: "https://www.cloudskillsboost.google/public_profiles/2025d540-22a7-4dc0-8f4f-8b4fcb1ed31c/badges/13381260?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
  {
    name: "Prompt Design in Vertex AI Skill Badge",
    organization: "Google Cloud",
    description: "Earned a skill badge for proficiency in designing and implementing effective prompts in Vertex AI.",
    link: "https://www.credly.com/badges/3814f5b8-d69a-4a0f-a997-59196a9f9f45",
  },
  {
    name: "Introduction to Responsible AI",
    organization: "Google Cloud",
    description: "Completed a course on the principles and practices of building responsible and ethical AI systems.",
    link: "https://www.cloudskillsboost.google/public_profiles/2025d540-22a7-4dc0-8f4f-8b4fcb1ed31c/badges/10734250?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
  },
];

const Certificates = () => {
  return (
    <Section id="certificates">
      <SectionTitle>Certificates</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-lg leading-tight">{certificate.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground flex-grow mb-4">{certificate.description}</p>
              <div className="mt-auto flex justify-between items-center">
                <p className="text-sm font-semibold">{certificate.organization}</p>
                <Button 
                  asChild 
                  size="sm" 
                  className="bg-[#479e9a] hover:bg-[#3a8a86] text-white border-[#479e9a]"
                >
                  <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                    Validate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;
