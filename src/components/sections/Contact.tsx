import React from 'react';
import Section, { SectionTitle } from '../common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';
import MediumIcon from '../icons/MediumIcon';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/zenitsu0509',
    icon: <Github className="h-8 w-8" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/himanshu-gangwar-a1b05a294/',
    icon: <Linkedin className="h-8 w-8" />,
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@himanshugangwar0509',
    icon: <MediumIcon className="h-8 w-8" />,
  },
  {
    name: 'Email',
    url: 'mailto:gangwarsanu8@gmail.com',
    icon: <Mail className="h-8 w-8" />,
  },
];

const Contact = () => {
  return (
    <Section id="contact" className="bg-muted/50 dark:bg-card">
      <SectionTitle>Connect With Me</SectionTitle>
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Let's Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                <div className="text-primary">{social.icon}</div>
                <p className="font-semibold text-lg">{social.name}</p>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Contact;
