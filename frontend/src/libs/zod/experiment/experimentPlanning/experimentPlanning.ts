import { z } from "zod"

import { typeExperimentSchema } from "./typeExperiment"
import { typeContextExperimentSchema } from "./typeContextExperiment"
import { typeDesignExperimentSchema } from "./typeDesignExperiment"
import { typeSelectionParticipantsObjectsSchema } from "./typeSelectionParticipantsObjects"
import { typeContextSelectionSchema } from "./typeContextSelection"

export const experimentPlanningSchema = z.object({
    goals: z.string().optional(),
    experimentalUnits: z.string().optional(),
    experimentalMaterial: z.string().optional(),
    tasks: z.string().optional(),
    hypotheses: z.string().optional(),
    parameters: z.string().optional(),
    variables: z.string().optional(),
    experimentDesign: z.string().optional(),
    procedure: z.string().optional(),
    analysisProcedure: z.string().optional(),
    isAQuasiExperiment: z.boolean().optional().default(false),
    isExplicitsAQuasiExperimentInStudy: z.boolean().optional().default(false),
    typeExperiment: typeExperimentSchema,
    typeContextExperiment: typeContextExperimentSchema,
    typeDesignExperiment: typeDesignExperimentSchema,
    typeSelectionParticipantsObjects: typeSelectionParticipantsObjectsSchema,
    typeContextSelection: typeContextSelectionSchema
})