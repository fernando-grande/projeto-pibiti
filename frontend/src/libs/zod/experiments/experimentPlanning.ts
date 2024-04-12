import { z } from "zod"

export const experimentPlanningSchema = z.object({
    task: z.string(),
    sampleSize: z.string(),
    experimentalPackage: z.string(),
    nuleHypothesis: z.string(),        // -> pelo menos 1
    alternativeHypothesis: z.string(), // 
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
}).refine(data => {
    //Hypothesis
    const verifyHypothesisFill = data.nuleHypothesis.trim() !== '' || data.alternativeHypothesis.trim() !== ''
    return verifyHypothesisFill
}, {
    message: "Please, fill at least one option!",
    path: ['nuleHypothesis', 'alternativeHypothesis'],
}).refine(data => {
    //Sampling
    const { simpleRandomSampling, systematicSampling, stratifiedRandomSampling, convenienceSampling } = data
    const verifySampling = [simpleRandomSampling, systematicSampling, stratifiedRandomSampling, convenienceSampling].filter(option => option)
    return verifySampling.length === 1
}, {
    message: "Please, select just one sampling option!",
    path: ['simpleRandomSampling', 'systematicSampling', 'stratifiedRandomSampling', 'convenienceSampling'],
}).refine(data => {
    //Factors and Treatments
    const { oneFactorTwoTreatments, oneFactorPlusTwoTreatments, twoFactorsTwoTreatments, plusTwoFactorsEachTwoTreatments } = data
    const verifyFactorsTreatments = [ oneFactorTwoTreatments, oneFactorPlusTwoTreatments, twoFactorsTwoTreatments, plusTwoFactorsEachTwoTreatments ].filter(option => option)
    return verifyFactorsTreatments.length === 1
}, {
    message: "Please, select just one option about factors and treatments!",
    path: [ 'oneFactorTwoTreatments', 'oneFactorPlusTwoTreatments', 'twoFactorsTwoTreatments', 'plusTwoFactorsEachTwoTreatments' ],
})

export type ExperimentPlanningTypeSchema = z.infer<typeof experimentPlanningSchema>