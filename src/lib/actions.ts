'use server';

import { generateIntro } from '@/ai/flows/generate-intro';

export async function generateIntroAction(resumeContent: string): Promise<{ introStatement?: string; error?: string }> {
  try {
    if (!resumeContent.trim()) {
      return { error: 'Resume content cannot be empty.' };
    }
    
    const result = await generateIntro({ resumeContent });
    
    if (result && result.introStatement) {
      return { introStatement: result.introStatement };
    } else {
      return { error: 'Failed to generate an intro. The AI model did not return a statement.' };
    }
  } catch (error) {
    console.error('Error in generateIntroAction:', error);
    // In a real app, you might want to log this error to a monitoring service
    return { error: 'An unexpected error occurred while generating the intro. Please try again later.' };
  }
}
