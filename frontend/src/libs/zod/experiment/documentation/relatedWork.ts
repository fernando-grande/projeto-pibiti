import { z } from "zod";

export const relatedWorkSchema = z.object({
    technologyUnderInvestigation: z.string(),
    alternativeTechnologies: z.string(),
    relatedStudies: z.string(),
    relevancePractice: z.string()
})