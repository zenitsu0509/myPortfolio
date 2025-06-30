// src/ai/flows/generate-intro.ts
'use server';

/**
 * @fileOverview An AI agent that generates a suggested intro statement for the About Me section, based on the user's resume content.
 *
 * - generateIntro - A function that generates the intro statement.
 * - GenerateIntroInput - The input type for the generateIntro function.
 * - GenerateIntroOutput - The return type for the generateIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIntroInputSchema = z.object({
  resumeContent: z.string().describe('The content of the user\'s resume.'),
});
export type GenerateIntroInput = z.infer<typeof GenerateIntroInputSchema>;

const GenerateIntroOutputSchema = z.object({
  introStatement: z.string().describe('A suggested intro statement for the About Me section.'),
});
export type GenerateIntroOutput = z.infer<typeof GenerateIntroOutputSchema>;

export async function generateIntro(input: GenerateIntroInput): Promise<GenerateIntroOutput> {
  return generateIntroFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateIntroPrompt',
  input: {schema: GenerateIntroInputSchema},
  output: {schema: GenerateIntroOutputSchema},
  prompt: `You are an AI assistant specialized in creating compelling introductory statements for personal portfolios.
  Based on the provided resume content, generate a concise and engaging intro statement that highlights the individual's key skills, experience, and career goals.

  Resume Content:
  {{resumeContent}}

  Intro Statement:`,
});

const generateIntroFlow = ai.defineFlow(
  {
    name: 'generateIntroFlow',
    inputSchema: GenerateIntroInputSchema,
    outputSchema: GenerateIntroOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
