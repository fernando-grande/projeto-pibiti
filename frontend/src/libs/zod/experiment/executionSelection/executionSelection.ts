import { z } from "zod"

export const executionSelectionSchema = z.object({
    preparation: z.string().optional(),
    deviations: z.string().optional(),
    pilotProjectCarriedOut: z.boolean().optional().default(false),
    howManyPilotProjectCarriedOut: z.number().int()
})