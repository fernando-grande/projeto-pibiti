import { z } from "zod";

export const conclusionsFutureWorkSchema = z.object({
    summary: z.string().min(1),
    impact: z.string().min(1),
    futureWork: z.string().min(1)
})