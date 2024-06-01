import { z } from "zod"

import { introductionSchema } from "./introduction"
import { relatedWorkSchema } from "./relatedWork"
import { abstractSchema } from "./abstract"

export const documentationSchema = z.object({
    useTemplate: z.boolean(),
    template: z.string().min(1),
    observationsAboutTemplateUsed: z.string().min(1),
    introduction: introductionSchema,
    relatedWork: relatedWorkSchema,
    abstract: abstractSchema
})