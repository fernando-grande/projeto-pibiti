import { z } from "zod"

import { introductionSchema } from "./introduction"
import { relatedWorkSchema } from "./relatedWork"
import { abstractSchema } from "./abstract"

export const documentationSchema = z.object({
    useTemplate: z.boolean().optional().default(false),
    template: z.string().optional(),
    observationsAboutTemplateUsed: z.string().optional(),
    introduction: introductionSchema,
    relatedWork: relatedWorkSchema,
    abstract: abstractSchema
})