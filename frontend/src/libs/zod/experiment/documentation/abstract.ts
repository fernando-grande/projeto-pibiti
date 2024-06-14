import { z } from "zod";

export const abstractSchema = z.object({
    objective: z.string().optional(),
    abstractBackground: z.string().optional(),
    methods: z.string().optional(),
    results: z.string().optional(),
    limitations: z.string().optional(),
    conclusions: z.string().optional(),
    keywords: z.string().optional()
})