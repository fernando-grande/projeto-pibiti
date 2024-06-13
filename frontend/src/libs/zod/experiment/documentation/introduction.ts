import { z } from "zod";

export const introductionSchema = z.object({
    problemStatement: z.string(),
    researchObjectives: z.string(),
    context: z.string()
})