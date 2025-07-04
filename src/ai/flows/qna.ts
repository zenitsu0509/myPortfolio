'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QnaInputSchema = z.object({
  question: z.string().describe('The question to ask the bot.'),
});
export type QnaInput = z.infer<typeof QnaInputSchema>;

const QnaOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type QnaOutput = z.infer<typeof QnaOutputSchema>;

export async function qna(input: QnaInput): Promise<QnaOutput> {
  return qnaFlow(input);
}

const qnaPrompt = ai.definePrompt({
    name: 'qnaPrompt',
    input: { schema: z.object({ question: z.string(), context: z.any() }) },
    output: { schema: QnaOutputSchema },
    prompt: `You are a helpful assistant that answers questions about a person based on the provided context.

Context:
{{#each (retrieve context)}} 
- {{this.text()}}
{{/each}}

Question: {{question}}

Answer:`,
});


const qnaFlow = ai.defineFlow(
  {
    name: 'qnaFlow',
    inputSchema: QnaInputSchema,
    outputSchema: QnaOutputSchema,
  },
  async input => {
    const {output} = await qnaPrompt({
        ...input,
        context: input.question
    });
    return output!;
  }
);
