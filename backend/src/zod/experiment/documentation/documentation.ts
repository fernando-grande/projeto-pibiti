import { z } from "zod"

import { introductionSchema } from "./introduction/introduction"
import { relatedWorkSchema } from "./relatedWork/relatedWork"
import { abstractSchema } from "./abstract/abstract"

export const documentationSchema = z.object({
    useTemplate: z.boolean().optional().default(false),
    template: z.string().optional(),
    observationsAboutTemplateUsed: z.string().optional(),
    introduction: introductionSchema,
    relatedWork: relatedWorkSchema,
    abstract: abstractSchema
})