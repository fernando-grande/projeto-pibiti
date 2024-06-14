import { z } from "zod";

export const acknowledgementsSchema = z.object({
    text: z.string().optional()
})