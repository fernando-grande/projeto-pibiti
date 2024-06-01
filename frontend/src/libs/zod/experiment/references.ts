import { z } from "zod";

export const referencesSchema = z.object({
    references: z.string().min(1)
})