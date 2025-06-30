import React from 'react';
import Section, { SectionTitle } from '../common/Section';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { ExperienceItem } from '@/types';

const workExperience: ExperienceItem[] = [
  {
    company: 'Innovate Corp',
    title: 'Senior Software Engineer',
    dates: 'Jan 2022 - Present',
    description: [
      'Led the development of a new microservices architecture, improving system scalability by 40%.',
      'Mentored junior engineers, fostering a culture of knowledge sharing and growth.',
      'Implemented CI/CD pipelines which reduced deployment time by 75%.',
    ],
  },
  {
    company: 'Tech Solutions Inc.',
    title: 'Software Engineer',
    dates: 'Jun 2020 - Dec 2021',
    description: [
      'Developed and maintained features for a large-scale e-commerce platform using React and Node.js.',
      'Collaborated with cross-functional teams to define and ship new features.',
      'Improved application performance by optimizing database queries and frontend rendering.',
    ],
  },
  {
    company: 'Digital Agency',
    title: 'Junior Web Developer',
    dates: 'May 2019 - May 2020',
    description: [
      'Built responsive websites for clients using HTML, CSS, and JavaScript.',
      'Assisted in the development of a custom CMS for managing client content.',
      'Gained experience with version control systems like Git.',
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
