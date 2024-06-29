import { z } from "zod"

export const executionSchema = z.object({
    dataCollect: z.string().min(1),
    training: z.string().min(1),
    pilotProject: z.string().min(1),
    experimentConduction: z.string().min(1),
    experimentConductionStartDate: z.coerce.date(),
    experimentConductionFinalDate: z.coerce.date(),
    experimentConductionPlace: z.string().min(1)
})