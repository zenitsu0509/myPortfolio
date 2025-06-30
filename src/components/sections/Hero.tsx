"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin, Loader2 } from 'lucide-react';
import Section from '../common/Section';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateIntroAction } from '@/lib/actions';

const Hero = () => {
  const [aboutText, setAboutText] = useState("A passionate and creative software developer with a knack for building beautiful and functional web applications. I thrive on solving complex problems and continuously learning new technologies. My goal is to leverage my skills to create meaningful digital experiences.");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResumeFile(event.target.files[0]);
    }
  };

  const handleGenerateIntro = async () => {
    if (!resumeFile) {
      toast({
        title: "No resume selected",
        description: "Please select a resume file (.txt) to generate an intro.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const resumeContent = e.target?.result as string;
        if (!resumeContent) {
          toast({ title: "Error reading file", description: "Could not read content from the selected file.", variant: "destructive" });
          setIsLoading(false);
          return;
        }

        const result = await generateIntroAction(resumeContent);
        if (result.error) {
           toast({ title: "Generation Failed", description: result.error, variant: "destructive" });
        } else if (result.introStatement) {
          setAboutText(result.introStatement);
          toast({ title: "Success", description: "New intro has been generated and updated!" });
        }
      };
      reader.onerror = () => {
         toast({ title: "File Read Error", description: "There was an error reading your file.", variant: "destructive" });
         setIsLoading(false);
      }
      reader.readAsText(resumeFile);
    } catch (error) {
      toast({
        title: "An Unexpected Error Occurred",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      // The isLoading state is managed inside the reader.onload to ensure it waits for async operation
    }
  };
  
  // Need to set isLoading false inside reader callbacks
  const originalOnload = new FileReader().onload;
  const newOnLoad = async (e: ProgressEvent<FileReader>) => {
      // original logic here
      const resumeContent = e.target?.result as string;
      const result = await generateIntroAction(resumeContent);
      if(result.introStatement) setAboutText(result.introStatement);
      // after original logic finishes
      setIsLoading(false);
  };


  return (
    <Section id="about" className="pt-24 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <Image
            src="https://placehold.co/300x300.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full shadow-lg border-4 border-primary/20"
            data-ai-hint="profile picture"
          />
          <h1 className="text-4xl font-bold font-headline mt-6">Alex Doe</h1>
          <p className="text-primary mt-1 text-lg">Software Developer</p>
          <div className="flex items-center text-muted-foreground mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <p>San Francisco, CA</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="GitHub"><Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></a>
            <a href="#" aria-label="Email"><Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold font-headline mb-4">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{aboutText}</p>

          <Card className="bg-muted/50 dark:bg-card">
            <CardHeader>
              <CardTitle>AI Intro Generator</CardTitle>
              <CardDescription>
                Upload your resume (.txt) to get a personalized intro suggestion.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="resume-upload">Resume File</Label>
                <Input id="resume-upload" type="file" accept=".txt" onChange={handleFileChange} />
              </div>
              <Button onClick={handleGenerateIntro} disabled={isLoading || !resumeFile}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Intro'
                )}
              </Button>
              <Textarea
                placeholder="Your 'About Me' will appear here..."
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                rows={5}
                className="mt-4"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
