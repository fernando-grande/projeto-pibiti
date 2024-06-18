import { z } from "zod";

export const conclusionsFutureWorkSchema = z.object({
    summary: z.string().optional(),
    impact: z.string().optional(),
    futureWork: z.string().optional()
})