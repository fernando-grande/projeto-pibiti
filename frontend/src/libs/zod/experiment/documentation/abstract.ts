import { z } from "zod";

export const abstractSchema = z.object({
    objective: z.string().min(1),
    abstractBackground: z.string().min(1),
    methods: z.string().min(1),
    results: z.string().min(1),
    limitations: z.string().min(1),
    conclusions: z.string().min(1),
    keywords: z.string().min(1)
})