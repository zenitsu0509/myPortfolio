import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Section, { SectionTitle } from '../common/Section';
import { GraduationCap } from 'lucide-react';
import type { EducationItem } from '@/types';

const educationHistory: EducationItem[] = [
  {
    institution: 'Institute of Engineering and Technology, Lucknow',
    degree: 'B.Tech in Computer Science and Engineering (AI)',
    years: 'Sept 2023 - Sept 2027',
    gpa: '7.6/10.0',
    details: [],
  },
  {
    institution: 'Shishu Bharti Inter Collage, Rudrapur',
    degree: 'Intermediate (12th Grade)',
    years: 'Completed May 2023',
    details: [
      'Grade: 89.6%',
    ],
  },
  {
    institution: 'Shishu Bharti Inter Collage, Rudrapur',
    degree: 'High School (10th Grade)',
    years: 'Completed May 2021',
    details: [
      'Grade: 85.4',
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
                    {item.gpa && <p>CGPA: {item.gpa}</p>}
                  </CardDescription>
                </CardHeader>
                {item.details.length > 0 && (
                  <CardContent>
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
