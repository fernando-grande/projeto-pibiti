import { z } from "zod";

export const relatedWorkSchema = z.object({
    technologyUnderInvestigation: z.string().min(1),
    alternativeTechnologies: z.string().min(1),
    relatedStudies: z.string().min(1),
    relevancePractice: z.string().min(1)
})