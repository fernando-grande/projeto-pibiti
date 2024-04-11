import { z } from "zod"

export const executionSchema = z.object({
    dataCollect: z.string(),
    training: z.string(),
    pilotProject: z.string(),
    experimentConduction: z.string(),
    experimentConductionDate: z.coerce.date(),
    experimentConductionPlace: z.string()
})

export type ExecutionTypeSchema = z.infer<typeof executionSchema>