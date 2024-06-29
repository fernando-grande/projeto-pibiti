import { z } from "zod"

export const documentationSchema = z.object({
    domain: z.string().min(1),
    goal: z.string().min(1),
    result: z.string().min(1),
    experimentalTemplate: z.string().min(1)
})