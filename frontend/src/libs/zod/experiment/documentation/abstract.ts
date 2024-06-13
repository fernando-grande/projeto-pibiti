import { z } from "zod";

export const abstractSchema = z.object({
    objective: z.string(),
    abstractBackground: z.string(),
    methods: z.string(),
    results: z.string(),
    limitations: z.string(),
    conclusions: z.string(),
    keywords: z.string()
})