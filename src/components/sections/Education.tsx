import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Section, { SectionTitle } from '../common/Section';
import { GraduationCap } from 'lucide-react';
import type { EducationItem } from '@/types';

const educationHistory: EducationItem[] = [
  {
    institution: 'State University',
    degree: 'Master of Science in Computer Science',
    years: '2020 - 2022',
    gpa: '3.9/4.0',
    details: [
      'Specialized in Artificial Intelligence and Machine Learning.',
      'Thesis on "Natural Language Processing for Sentiment Analysis".',
      'Recipient of the Dean\'s List for all semesters.',
    ],
  },
  {
    institution: 'Tech Institute',
    degree: 'Bachelor of Science in Software Engineering',
    years: '2016 - 2020',
    gpa: '3.8/4.0',
    details: [
      'Graduated with honors.',
      'President of the university coding club.',
      'Completed a capstone project on a mobile application for local event discovery.',
    ],
  },
];

const Education = () => {
  return (
    <Section id="education" className="bg-muted/50 dark:bg-card">
      <SectionTitle>Education</SectionTitle>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-border"></div>
        {educationHistory.map((item, index) => (
          <div key={index} className="relative mb-8 flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="hidden md:flex w-1/2"></div>
            <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md">
                <GraduationCap className="w-4 h-4" />
            </div>
            <div className="w-full md:w-1/2 md:pl-8 odd:md:pl-0 odd:md:pr-8">
              <Card>
                <CardHeader>
                  <CardTitle>{item.degree}</CardTitle>
                  <CardDescription>
                    <p className="font-semibold">{item.institution}</p>
                    <p>{item.years}</p>
                    {item.gpa && <p>GPA: {item.gpa}</p>}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
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

export default Education;
