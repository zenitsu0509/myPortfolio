import React from 'react';
import { Award, BadgeCheck, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section, { SectionTitle } from '../common/Section';
import type { Achievement } from '@/types';

const achievements: Achievement[] = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'First Place Hackathon',
    organization: 'Tech University',
    date: 'March 2023',
    description: 'Won first place in a university-wide hackathon by developing a real-time collaborative coding platform.',
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: 'June 2022',
    description: 'Validated foundational, high-level understanding of AWS Cloud, services, and terminology.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Published Research Paper',
    organization: 'International Journal of Computer Science',
    date: 'August 2021',
    description: 'Co-authored a research paper on efficient algorithms for large-scale data processing, published in a peer-reviewed journal.',
  },
];

const Achievements = () => {
  return (
    <Section id="achievements">
      <SectionTitle>Achievements & Certificates</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <Card key={index} className="flex flex-col text-center items-center">
            <CardHeader className="items-center">
              {item.icon}
              <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{item.description}</p>
              <div className="mt-4 text-sm">
                <p className="font-semibold">{item.organization}</p>
                <p className="text-muted-foreground">{item.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
