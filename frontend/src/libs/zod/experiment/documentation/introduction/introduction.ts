import { z } from "zod";

export const introductionSchema = z.object({
    problemStatement: z.string().optional(),
    researchObjectives: z.string().optional(),
    context: z.string().optional()
})