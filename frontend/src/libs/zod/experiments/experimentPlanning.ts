import { z } from "zod"

export const experimentPlanningSchema = z.object({
    task: z.string(),
    sampleSize: z.string(),
    experimentalPackage: z.string(),
    nuleHypothesis: z.boolean(),        // -> pelo menos 1
    alternativeHypothesis: z.boolean(), // 
    independentVariables: z.string(),
    dependentVariables: z.string(),
    simpleRandomSampling: z.boolean(),     //
    systematicSampling: z.boolean(),       //
    stratifiedRandomSampling: z.boolean(), // -> apenas 1
    convenienceSampling: z.boolean(),      //
    balancing: z.string(),
    block: z.string(),
    randomness: z.string(),
    oneFactorTwoTreatments: z.boolean(),          // -> apenas 1
    oneFactorPlusTwoTreatments: z.boolean(),      // 
    twoFactorsTwoTreatments: z.boolean(),         //
    plusTwoFactorsEachTwoTreatments: z.boolean(), //
    artifact: z.string(),
    materialValidation: z.string()
}). refine(data => data.nuleHypothesis || data.alternativeHypothesis, {
    message: "Please, select at least one option",
    path: ['nuleHypothesis', 'alternativeHypothesis'],
})

export type ExperimentPlanningTypeSchema = z.infer<typeof experimentPlanningSchema>