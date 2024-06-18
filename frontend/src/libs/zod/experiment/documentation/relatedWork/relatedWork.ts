import { z } from "zod";

export const relatedWorkSchema = z.object({
    technologyUnderInvestigation: z.string().optional(),
    alternativeTechnologies: z.string().optional(),
    relatedStudies: z.string().optional(),
    relevancePractice: z.string().optional()
})