import { z } from "zod"

import { typeExperimentSchema } from "./typeExperiment/typeExperiment"
import { typeContextExperimentSchema } from "./typeContextExperiment/typeContextExperiment"
import { typeDesignExperimentSchema } from "./typeDesignExperiment/typeDesignExperiment"
import { typeSelectionParticipantsObjectsSchema } from "./typeSelectionParticipantsObjects/typeSelectionParticipantsObjects"
import { typeContextSelectionSchema } from "./typeContextSelection/typeContextSelection"

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