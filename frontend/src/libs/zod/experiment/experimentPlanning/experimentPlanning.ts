import { z } from "zod"

import { typeExperimentSchema } from "./typeExperiment"
import { typeContextExperimentSchema } from "./typeContextExperiment"
import { typeDesignExperimentSchema } from "./typeDesignExperiment"
import { typeSelectionParticipantsObjectsSchema } from "./typeSelectionParticipantsObjects"
import { typeContextSelectionSchema } from "./typeContextSelection"

export const experimentPlanningSchema = z.object({
    goals: z.string().min(1),
    experimentalUnits: z.string().min(1),
    experimentalMaterial: z.string().min(1),
    tasks: z.string().min(1),
    hypotheses: z.string().min(1),
    parameters: z.string().min(1),
    variables: z.string().min(1),
    experimentDesign: z.string().min(1),
    procedure: z.string().min(1),
    analysisProcedure: z.string().min(1),
    isAQuasiExperiment: z.boolean(),
    isExplicitsAQuasiExperimentInStudy: z.boolean(),
    typeExperiment: typeExperimentSchema,
    typeContextExperiment: typeContextExperimentSchema,
    typeDesignExperiment: typeDesignExperimentSchema,
    typeSelectionParticipantsObjects: typeSelectionParticipantsObjectsSchema,
    typeContextSelection: typeContextSelectionSchema
})