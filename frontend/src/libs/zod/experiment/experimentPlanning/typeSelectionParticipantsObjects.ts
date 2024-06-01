import { z } from "zod";

export const typeSelectionParticipantsObjectsSchema = z.object({
    simpleRandomSampling: z.boolean(),
    systematicSampling: z.boolean(),
    stratifiedRandomSampling: z.boolean(),
    convenienceSampling: z.boolean(),
    quotaSampling: z.boolean()
})