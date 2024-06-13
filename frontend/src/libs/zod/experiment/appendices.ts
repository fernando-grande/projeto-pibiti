import { z } from "zod";

export const appendicesSchema = z.object({
    appendices: z.string()
})