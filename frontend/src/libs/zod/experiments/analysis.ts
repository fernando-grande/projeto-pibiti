import { z } from "zod"

export const analysisSchema = z.object({
    implicationTreatmentDeveloped: z.string(),
    mortalityRate: z.string(),
    conclusionValidity: z.boolean(), // 
    constructoValidity: z.boolean(), // 
    externalValidity: z.boolean(),
    internalValidity: z.boolean(),
    effectSize: z.string(),
    statisticalTool: z.string(),
    descriptiveStatistics: z.string(),
    correlation: z.boolean(),
    hypothesisTest: z.boolean(),
    normalityTest: z.boolean()
})

export type AnalysisTypeSchema = z.infer<typeof analysisSchema>