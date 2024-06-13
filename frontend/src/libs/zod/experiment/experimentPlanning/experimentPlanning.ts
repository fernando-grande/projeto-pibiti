import { z } from "zod"

import { typeExperimentSchema } from "./typeExperiment"
import { typeContextExperimentSchema } from "./typeContextExperiment"
import { typeDesignExperimentSchema } from "./typeDesignExperiment"
import { typeSelectionParticipantsObjectsSchema } from "./typeSelectionParticipantsObjects"
import { typeContextSelectionSchema } from "./typeContextSelection"

export const experimentPlanningSchema = z.object({
    goals: z.string(),
    experimentalUnits: z.string(),
    experimentalMaterial: z.string(),
    tasks: z.string(),
    hypotheses: z.string(),
    parameters: z.string(),
    variables: z.string(),
    experimentDesign: z.string(),
    procedure: z.string(),
    analysisProcedure: z.string(),
    isAQuasiExperiment: z.boolean().optional().default(false),
    isExplicitsAQuasiExperimentInStudy: z.boolean().optional().default(false),
    typeExperiment: typeExperimentSchema,
    typeContextExperiment: typeContextExperimentSchema,
    typeDesignExperiment: typeDesignExperimentSchema,
    typeSelectionParticipantsObjects: typeSelectionParticipantsObjectsSchema,
    typeContextSelection: typeContextSelectionSchema
})