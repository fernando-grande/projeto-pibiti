import { z } from "zod"

export const executionSelectionSchema = z.object({
    preparation: z.string().min(1),
    deviations: z.string().min(1),
    pilotProjectCarriedOut: z.boolean(),
    howManyPilotProjectCarriedOut: z.number().int()
})