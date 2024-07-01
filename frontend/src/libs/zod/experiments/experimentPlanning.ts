import { z } from "zod"

export const experimentPlanningSchema = z.object({
    task: z.string().min(1),
    sampleSize: z.string().min(1),
    experimentalPackage: z.string().min(1),
    nuleHypothesis: z.string(),        // -> pelo menos 1
    alternativeHypothesis: z.string(), // 
    independentVariables: z.string().min(1),
    dependentVariables: z.string().min(1),
    simpleRandomSampling: z.boolean(),     //
    systematicSampling: z.boolean(),       //
    stratifiedRandomSampling: z.boolean(), // -> apenas 1
    convenienceSampling: z.boolean(),      //
    balancing: z.string().min(1),
    block: z.string().min(1),
    randomness: z.string().min(1),
    oneFactorTwoTreatments: z.boolean(),          // -> apenas 1
    oneFactorPlusTwoTreatments: z.boolean(),      // 
    twoFactorsTwoTreatments: z.boolean(),         //
    plusTwoFactorsEachTwoTreatments: z.boolean(), //
    artifact: z.string().min(1),
    materialValidation: z.string().min(1)
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