import { z } from "zod";

export const packageSchema = z.object({
    isExperimentalPackageInformed: z.boolean(),
    url: z.string().min(1)
})