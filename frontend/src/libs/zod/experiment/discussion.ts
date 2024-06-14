import { z } from "zod";

export const discussionSchema = z.object({
    evaluationOfResultsAndImplications: z.string().optional(),
    threatsValidity: z.string().optional(),
    isFollowThreatsByWohlin: z.boolean().optional().default(false),
    inferences: z.string().optional(),
    lessonsLearned: z.string().optional()
})