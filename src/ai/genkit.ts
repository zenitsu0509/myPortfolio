import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {groq} from 'genkitx-groq';
import {pineconeRetriever} from 'genkitx-pinecone';
import {defineEmbedder} from 'genkit/embed';
import {google} from 'googleapis';

const PINECONE_INDEX_ID = 'my-portfolio';

export const ai = genkit({
  plugins: [
    groq({apiKey: process.env.GROQ_API_KEY}),
    googleAI({apiKey: process.env.GOOGLE_API_KEY}),
    pineconeRetriever(PINECONE_INDEX_ID, {
      apiKey: process.env.PINECONE_API_KEY!,
    }),
  ],
  model: 'groq/llama3-8b-8192',
  embedder: 'googleai/multilingual-e5-large',
  retriever: `pinecone/${PINECONE_INDEX_ID}`,
});
