import { z } from "zod";

export const acknowledgmentsSchema = z.object({
    text: z.string().min(1)
})