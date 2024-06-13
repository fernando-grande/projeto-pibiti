import { z } from "zod";

export const analysisSchema = z.object({
    descriptiveStatistics: z.string(),
    dataSetPreparation: z.string(),
    hypothesisTesting: z.string(),
    hasQualitativeAnalysisOfExperiment: z.boolean().optional().default(false),
    whatQualitativeAnalysisPerformed: z.string(),
    experimentAnalysisBasedPValue: z.boolean().optional().default(false),
    howDataHasBeenAnalyzed: z.string(),
    studyHasPerformedMetaAnalysis: z.boolean().optional().default(false)
})