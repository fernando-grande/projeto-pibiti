import { z } from "zod";

export const typeContextSelectionSchema = z.object({
    offline: z.boolean(),
    online: z.boolean(),
    student: z.boolean(),
    professional: z.boolean(),
    toy: z.boolean(),
    realProblems: z.boolean(),
    specific: z.boolean(),
    general: z.boolean()
})