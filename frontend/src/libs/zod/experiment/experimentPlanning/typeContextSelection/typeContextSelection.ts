import { z } from "zod";

export const typeContextSelectionSchema = z.object({
    offline: z.boolean().optional().default(false),
    online: z.boolean().optional().default(false),
    student: z.boolean().optional().default(false),
    professional: z.boolean().optional().default(false),
    toy: z.boolean().optional().default(false),
    realProblems: z.boolean().optional().default(false),
    specific: z.boolean().optional().default(false),
    general: z.boolean().optional().default(false)
})