import { z } from "zod"

export const documentationSchema = z.object({
    domain: z.string(),
    goal: z.string(),
    result: z.string(),
    experimentalTemplate: z.string()
})

export type DocumentationTypeSchema = z.infer<typeof documentationSchema>