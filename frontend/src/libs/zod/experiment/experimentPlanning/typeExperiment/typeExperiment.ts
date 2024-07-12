import { z } from "zod";

export const typeExperimentSchema = z.object({
    original: z.boolean().optional().default(false),
    replicated: z.boolean().optional().default(false),
    repeated: z.boolean().optional().default(false),
    reproduced: z.boolean().optional().default(false),
})