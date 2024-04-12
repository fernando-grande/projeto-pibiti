import { z } from "zod";

export const analysisSchema = z.object({
    implicationTreatmentDeveloped: z.string(),
    mortalityRate: z.string(),
    conclusionValidity: z.string(),  
    constructoValidity: z.string(), 
    externalValidity: z.string(),
    internalValidity: z.string(),
    effectSize: z.string(),
    statisticalTool: z.string(),
    descriptiveStatistics: z.string(),
    correlation: z.boolean(),
    hypothesisTest: z.boolean(),
    normalityTest: z.boolean()
}).refine(data => data.correlation || data.hypothesisTest || data.normalityTest, {
    message: "Please, select at least one option!",
    path: ['correlation', 'hypothesisTest', 'normalityTest'],
})

export type AnalysisTypeSchema = z.infer<typeof analysisSchema>