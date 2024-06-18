import { z } from "zod";

export const packageSchema = z.object({
    isExperimentalPackageInformed: z.boolean().optional().default(false),
    url: z.string()
})