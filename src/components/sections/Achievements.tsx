import React from 'react';
import { Star, Trophy, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Section, { SectionTitle } from '../common/Section';
import type { Achievement } from '@/types';

const achievements: Achievement[] = [
  {
    icon: <Star className="h-8 w-8 text-primary" />,
    title: '2-Star Rating on CodeChef',
    organization: 'CodeChef',
    date: 'Competitive Programming',
    description: 'Achieved a 2-star rating, demonstrating problem-solving and competitive programming skills on the platform.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'Prompt Design in Vertex AI',
    organization: 'Google Cloud Certificate',
    date: 'Certification',
    description: 'Completed certification for prompt design in Google\'s Vertex AI platform, enhancing skills in generative AI.',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    title: 'Top 1% in 12th-Grade Exams',
    organization: 'Uttarakhand Board',
    date: 'Academics',
    description: 'Achieved a score in the top 1 percentile in the state-level 12th-grade examinations.',
  },
];

const Achievements = () => {
  return (
    <Section id="achievements">
      <SectionTitle>Honors & Awards</SectionTitle>
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
