import React from 'react';
import Section, { SectionTitle } from '../common/Section';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { ExperienceItem } from '@/types';

const workExperience: ExperienceItem[] = [
  {
    company: 'Whissle AI',
    title: 'AI/ASR Intern',
    dates: 'March 2024 - July 2024 (Remote)',
    description: [
      'Worked with Meta Automatic Speech Recognition (ASR) models on various speech-related tasks.',
      'Performed data cleaning and annotation for ASR model training datasets.',
      'Experimented with and evaluated new and emerging speech data models.',
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-border"></div>

        {workExperience.map((job, index) => (
          <div key={index} className="relative mb-8 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot on the timeline */}
            <div className="hidden md:flex w-1/2"></div>
             <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md">
                <Briefcase className="w-4 h-4" />
            </div>
            {/* Card */}
            <div className="w-full md:w-1/2 md:pl-8 odd:md:pl-0 odd:md:pr-8">
              <Card>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    {job.company} | {job.dates}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
