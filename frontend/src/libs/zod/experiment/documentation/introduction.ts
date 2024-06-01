import { z } from "zod";

export const introductionSchema = z.object({
    problemStatement: z.string().min(1),
    researchObjectives: z.string().min(1),
    context: z.string().min(1)
})