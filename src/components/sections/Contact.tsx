import React from 'react';
import Section, { SectionTitle } from '../common/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <Section id="contact" className="bg-muted/50 dark:bg-card">
      <SectionTitle>Get in Touch</SectionTitle>
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            Have a question or want to work together? Leave your details and I'll get back to you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="#" method="POST" className="space-y-4">
            <Input name="name" type="text" placeholder="Your Name" required />
            <Input name="email" type="email" placeholder="Your Email" required />
            <Textarea name="message" placeholder="Your Message" required />
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Contact;
