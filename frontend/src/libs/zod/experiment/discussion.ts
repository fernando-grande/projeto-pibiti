import { z } from "zod";

export const discussionSchema = z.object({
    evaluationOfResultsAndImplications: z.string().min(1),
    threatsValidity: z.string().min(1),
    isFollowThreatsByWohlin: z.boolean(),
    inferences: z.string().min(1),
    lessonsLearned: z.string().min(1)
})