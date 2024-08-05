import { z } from "zod";

export const typeContextExperimentSchema = z.object({
    inVivo: z.boolean().optional().default(false),
    inVitro: z.boolean().optional().default(false)
})