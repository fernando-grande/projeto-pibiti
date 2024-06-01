import { z } from "zod"

import { documentationSchema } from "./documentation/documentation"
import { experimentPlanningSchema } from "./experimentPlanning/experimentPlanning"
import { discussionSchema } from "./discussion"
import { executionSelectionSchema } from "./executionSelection"
import { evaluationSchema } from "./evaluation"
import { conclusionsFutureWorkSchema } from "./conclusionsFutureWork"
import { referencesSchema } from "./references"
import { appendicesSchema } from "./appendices"
import { acknowledgmentsSchema } from "./acknowledgements"
import { packageSchema } from "./package"
import { analysisSchema } from "./analysis"

export const experimentSchema = z.object({
    title: z.string().min(1),
    authorship: z.string().min(1),
    publicationYear: z.number().int(),
    publicationType: z.string().min(1),
    publicationVenue: z.string().min(1),
    pagesNumber: z.number().int(),
    documentation: documentationSchema,
    experimentPlanning: experimentPlanningSchema,
    discussion: discussionSchema,
    executionSelection: executionSelectionSchema,
    evaluation: evaluationSchema,
    conclusionsFutureWork: conclusionsFutureWorkSchema,
    references: referencesSchema,
    appendices: appendicesSchema,
    acknowledgments: acknowledgmentsSchema,
    package: packageSchema,
    analysis: analysisSchema
})

export type ExperimentTypeSchema = z.infer<typeof experimentSchema>