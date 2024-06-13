import { z } from "zod";

export const discussionSchema = z.object({
    evaluationOfResultsAndImplications: z.string(),
    threatsValidity: z.string(),
    isFollowThreatsByWohlin: z.boolean().optional().default(false),
    inferences: z.string(),
    lessonsLearned: z.string()
})