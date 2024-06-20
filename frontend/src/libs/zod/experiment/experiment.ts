import { z } from "zod"

import { documentationSchema } from "./documentation/documentation"
import { experimentPlanningSchema } from "./experimentPlanning/experimentPlanning"
import { discussionSchema } from "./discussion/discussion"
import { executionSelectionSchema } from "./executionSelection/executionSelection"
import { evaluationSchema } from "./evaluation/evaluation"
import { conclusionsFutureWorkSchema } from "./conclusionsFutureWork/conclusionsFutureWork"
import { referencesSchema } from "./references/references"
import { appendicesSchema } from "./appendices/appendices"
import { acknowledgementsSchema } from "./acknowledgements/acknowledgements"
import { packageSchema } from "./package/package"
import { analysisSchema } from "./analysis/analysis"

export const experimentSchema = z.object({
    title: z.string().min(1),
    authorship: z.string().min(1),
    publicationYear: z.number().int(),
    publicationType: z.string().min(1),
    publicationVenue: z.string().min(1, { message: "Is required" }),
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