import { z } from "zod"

import { generalInfoSchema } from "../experiments/generalInformation"
import { experimentPlanningSchema } from "../experiments/experimentPlanning"
import { executionSchema } from "../experiments/execution"
import { analysisSchema } from "../experiments/analysis"
import { documentationSchema } from "../experiments/documentation"

export const experimentFormSchema = z.object({
    generalInfo: generalInfoSchema,
    experimentPlanning: experimentPlanningSchema,
    execution: executionSchema,
    analysis: analysisSchema,
    documentation: documentationSchema
})

export type ExperimentFormTypeSchema = z.infer<typeof experimentFormSchema>