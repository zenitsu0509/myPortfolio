"use client";

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import MediumIcon from '../icons/MediumIcon';
import Section from '../common/Section';
import { Button } from '../ui/button';

const Hero = () => {
  const aboutText = "A dedicated and aspiring AI and Machine Learning engineer with a passion for developing intelligent systems. Experienced in Automatic Speech Recognition (ASR), Natural Language Processing (NLP), and building interactive applications. Proven ability to work with various data models and a strong foundation in core machine learning concepts. Eager to apply my skills to solve real-world problems and contribute to innovative AI projects.";

  return (
    <Section id="about" className="pt-24 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex flex-col items-center text-center">
          {/* <Image
            src="/images/1.png"
            alt="Himanshu Gangwar"
            width={200}
            height={200}
            className="rounded-full object-cover shadow-lg border-4 border-primary/20"
            data-ai-hint="profile picture"
          /> */}
          <div className="z-0 h-60 w-60 md:h-80 md:w-80 relative p-2  rounded-full">
          <Image
                      src="/images/1.png"
                      alt="Himanshu Gangwar"
                      fill
                      className="z-20 rounded-full object-center object-scale-down -ml-0.5 "
                      data-ai-hint="profile picture" 
                    />
                    <div className="z-10 h-full w-full rounded-full p-3 pb-10 mt-12 overflow-hidden ">
                      <div className="h-full w-full rounded-full shadow-primary/60 shadow-lg"></div>
                    </div>
                    </div>
          <h1 className="text-4xl font-bold font-headline mt-6">Himanshu Gangwar</h1>
          <p className="text-primary mt-1 text-lg">AI & Machine Learning Engineer</p>
          <div className="flex items-center text-muted-foreground mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <p>Baheri, Uttar Pradesh, India</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/zenitsu0509" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></a>
            <a href="https://www.linkedin.com/in/himanshu-gangwar-a1b05a294/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></a>
            <a href="https://medium.com/@himanshugangwar0509" target="_blank" rel="noopener noreferrer" aria-label="Medium"><MediumIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></a>
            <a href="mailto:gangwarsanu8@gmail.com" aria-label="Email"><Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold font-headline mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">{aboutText}</p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
                <a href="#contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline">
                <a href="/documents/resume.pdf" download>Download CV</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
