import { z } from "zod";

export const evaluationSchema = z.object({
    theAuthorsConcernedEvaluatingTheQuality: z.boolean()
})