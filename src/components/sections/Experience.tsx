import React from 'react';
import Section, { SectionTitle } from '../common/Section';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { ExperienceItem } from '@/types';

const workExperience: ExperienceItem[] = [
  {
    company: 'Whissle',
    title: 'AI Research Fellow · Trainee',
    dates: 'Jul 2025 - Oct 2025 · California, United States (Remote)',
    description: [
      'Researched and fine-tuned advanced ASR models tailored for multilingual enterprise use cases.',
      'Ran experimentation pipelines to benchmark accuracy, latency, and robustness across noisy speech datasets.',
      'Partnered with the AI/ML team to productionize promising ASR model variants for customer pilots.',
    ],
  },
  {
    company: 'Whissle',
    title: 'Research Intern · Artificial Intelligence & Machine Learning',
    dates: 'Mar 2025 - Jun 2025 · Remote',
    description: [
      'Prototyped new AI models for voice intelligence and evaluated them against established baselines.',
      'Built data augmentation and labeling workflows that improved downstream ASR training efficiency.',
      'Documented research findings and shared weekly insights with senior researchers to guide roadmap decisions.',
    ],
  },
  {
    company: 'BharatWork',
    title: 'AI Lead · Part-time',
    dates: 'Sep 2025 · Lucknow, Uttar Pradesh (Hybrid)',
    description: [
      'Architected a custom text-to-speech backend leveraging AWS and MediaPipe signals for BharatWork.',
      'Integrated TTS services with existing product APIs to deliver conversational voice support.',
      'Defined deployment and monitoring strategy to ensure low latency for regional users.',
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
