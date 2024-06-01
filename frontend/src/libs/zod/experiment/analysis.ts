import { z } from "zod";

export const analysisSchema = z.object({
    descriptiveStatistics: z.string().min(1),
    dataSetPreparation: z.string().min(1),
    hypothesisTesting: z.string().min(1),
    hasQualitativeAnalysisOfExperiment: z.boolean(),
    whatQualitativeAnalysisPerformed: z.string().min(1),
    experimentAnalysisBasedPValue: z.boolean(),
    howDataHasBeenAnalyzed: z.string(),
    studyHasPerformedMetaAnalysis: z.boolean()
})