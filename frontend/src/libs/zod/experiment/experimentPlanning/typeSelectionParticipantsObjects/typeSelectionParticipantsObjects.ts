import { z } from "zod";

export const typeSelectionParticipantsObjectsSchema = z.object({
    simpleRandomSampling: z.boolean().optional().default(false),
    systematicSampling: z.boolean().optional().default(false),
    stratifiedRandomSampling: z.boolean().optional().default(false),
    convenienceSampling: z.boolean().optional().default(false),
    quotaSampling: z.boolean().optional().default(false)
})