import { z } from "zod";

export const analysisSchema = z.object({
    implicationTreatmentDeveloped: z.string().min(1),
    mortalityRate: z.string().min(1),
    conclusionValidity: z.string().min(1),  
    constructoValidity: z.string().min(1), 
    externalValidity: z.string().min(1),
    internalValidity: z.string().min(1),
    effectSize: z.string().min(1),
    statisticalTool: z.string().min(1),
    descriptiveStatistics: z.string().min(1),
    correlation: z.boolean(),
    hypothesisTest: z.boolean(),
    normalityTest: z.boolean(),
    inferentialStatisticsDescription: z.string().min(1)
}).refine(data => data.correlation || data.hypothesisTest || data.normalityTest, {
    message: "Please, select at least one option!",
    path: ['correlation', 'hypothesisTest', 'normalityTest'],
})

export type AnalysisTypeSchema = z.infer<typeof analysisSchema>