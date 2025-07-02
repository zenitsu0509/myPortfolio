import React from 'react';
import { Badge } from '@/components/ui/badge';
import Section, { SectionTitle } from '../common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
    {
        category: "Programming Languages",
        list: ["Python", "C++", "C","Java"]
    },
    {
        category: "Web Technologies",
        list: ["Streamlit", "HTML"]
    },
    {
        category: "LLM Tools & Technologies",
        list: ["LangChain", "ChatGroq API", "Pinecone", "Hugging Face", "NLP"]
    },
    {
        category: "Data Visualization",
        list: ["Matplotlib", "Seaborn", "Plotly"]
    },
    {
        category: "Data Science & Machine Learning",
        list: ["Numpy", "Pandas", "Scikit-learn", "Neo4j", "Computer Vision", "Deep Learning","MySQL"]
    },
    {
        category: "Tools & Platforms",
        list: ["Git", "Docker", "Google Colab", "Jupyter Notebook","Kaggle", "GitHub", "VS Code"]
    }
];

const Skills = () => {
  return (
    <Section id="skills" className="bg-muted/50 dark:bg-card">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillCategory) => (
            <Card key={skillCategory.category}>
                <CardHeader>
                    <CardTitle className="text-xl">{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {skillCategory.list.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </CardContent>
            </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
