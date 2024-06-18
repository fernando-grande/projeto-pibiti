import { z } from "zod";

export const analysisSchema = z.object({
    descriptiveStatistics: z.string().optional(),
    dataSetPreparation: z.string().optional(),
    hypothesisTesting: z.string().optional(),
    hasQualitativeAnalysisOfExperiment: z.boolean().optional().default(false),
    whatQualitativeAnalysisPerformed: z.string().optional(),
    experimentAnalysisBasedPValue: z.boolean().optional().default(false),
    howDataHasBeenAnalyzed: z.string().optional(),
    studyHasPerformedMetaAnalysis: z.boolean().optional().default(false)
})