import { z } from "zod";

export const conclusionsFutureWorkSchema = z.object({
    summary: z.string(),
    impact: z.string(),
    futureWork: z.string()
})