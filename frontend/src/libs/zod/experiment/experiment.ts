import { z } from "zod"

import { documentationSchema } from "./documentation/documentation"
import { experimentPlanningSchema } from "./experimentPlanning/experimentPlanning"
import { discussionSchema } from "./discussion"
import { executionSelectionSchema } from "./executionSelection"
import { evaluationSchema } from "./evaluation"
import { conclusionsFutureWorkSchema } from "./conclusionsFutureWork"
import { referencesSchema } from "./references"
import { appendicesSchema } from "./appendices"
import { acknowledgementsSchema } from "./acknowledgements"
import { packageSchema } from "./package"
import { analysisSchema } from "./analysis"

export const experimentSchema = z.object({
    title: z.string().optional(),
    authorship: z.string().optional(),
    publicationYear: z.number().int(),
    publicationType: z.string().optional(),
    publicationVenue: z.string().optional(),
    pagesNumber: z.number().int(),
    documentation: documentationSchema,
    experimentPlanning: experimentPlanningSchema,
    discussion: discussionSchema,
    executionSelection: executionSelectionSchema,
    evaluation: evaluationSchema,
    conclusionsFutureWork: conclusionsFutureWorkSchema,
    references: referencesSchema,
    appendices: appendicesSchema,
    acknowledgements: acknowledgementsSchema,
    package: packageSchema,
    analysis: analysisSchema
})

export type ExperimentTypeSchema = z.infer<typeof experimentSchema>