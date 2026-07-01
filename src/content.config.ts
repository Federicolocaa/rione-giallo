import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: z.object({
		titolo: z.string(),
		data: z.date(),
		sommario: z.string(),
		immagine: z.string().optional(),
	}),
});

const eventi = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/eventi' }),
	schema: z.object({
		titolo: z.string(),
		data: z.date(),
		luogo: z.string().optional(),
		descrizione: z.string(),
	}),
});

export const collections = { news, eventi };