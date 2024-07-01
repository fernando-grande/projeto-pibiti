import { z } from "zod"

export const generalInfoSchema = z.object({
    authorsName: z.string().min(1, "This field is mandatory"),
    university: z.string().min(1, "This field is mandatory"),
    addres: z.string(),
    contactEmail: z.string()
})