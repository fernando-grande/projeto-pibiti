import { useFormContext } from "../../hooks/useFormContext";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";

export function Analysis() {

    const { register, prevForm, errors, nextForm } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={nextForm} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">ANALYSIS</p>

                <label htmlFor="analysis-descriptiveStatistics">Descriptive Statistics: </label>
                <input id="analysis-descriptiveStatistics" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.descriptiveStatistics')} />
                {errors.analysis?.descriptiveStatistics && <span>{errors.analysis.descriptiveStatistics.message}</span>}

                <label htmlFor="analysis-dataSetPreparation">Data Set Preparation: </label>
                <input id="analysis-dataSetPreparation" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.dataSetPreparation')} />
                {errors.analysis?.dataSetPreparation && <span>{errors.analysis.dataSetPreparation.message}</span>}

                <label htmlFor="analysis-hypothesisTesting">Hypothesis Testing: </label>
                <input id="analysis-hypothesisTesting" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.hypothesisTesting')} />
                {errors.analysis?.hypothesisTesting && <span>{errors.analysis.hypothesisTesting.message}</span>}

                <label htmlFor="analysis-hasQualitativeAnalysisOfExperiment">Has Qualitative Analysis of Experiment: </label>
                <input id="analysis-hasQualitativeAnalysisOfExperiment" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.hasQualitativeAnalysisOfExperiment')} />
                {errors.analysis?.hasQualitativeAnalysisOfExperiment && <span>{errors.analysis.hasQualitativeAnalysisOfExperiment.message}</span>}

                <label htmlFor="analysis-whatQualitativeAnalysisPerformed">What Qualitative Analysis was Performed: </label>
                <input id="analysis-whatQualitativeAnalysisPerformed" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.whatQualitativeAnalysisPerformed')} />
                {errors.analysis?.whatQualitativeAnalysisPerformed && <span>{errors.analysis.whatQualitativeAnalysisPerformed.message}</span>}

                <label htmlFor="analysis-experimentAnalysisBasedPValue">The Experiment Analysis was based on P value? </label>
                <input id="analysis-experimentAnalysisBasedPValue" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.experimentAnalysisBasedPValue')} />
                {errors.analysis?.experimentAnalysisBasedPValue && <span>{errors.analysis.experimentAnalysisBasedPValue.message}</span>}

                <label htmlFor="analysis-howDataHasBeenAnalyzed">Describe how data has been analyzed: </label>
                <input id="analysis-howDataHasBeenAnalyzed" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.howDataHasBeenAnalyzed')} />
                {errors.analysis?.howDataHasBeenAnalyzed && <span>{errors.analysis.howDataHasBeenAnalyzed.message}</span>}

                <label htmlFor="analysis-studyHasPerformedMetaAnalysis">The study has performed Meta Analysis? </label>
                <input id="analysis-studyHasPerformedMetaAnalysis" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.studyHasPerformedMetaAnalysis')} />
                {errors.analysis?.studyHasPerformedMetaAnalysis && <span>{errors.analysis.studyHasPerformedMetaAnalysis.message}</span>}

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>

                <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PREV
                </button>

            </form>
        </ExperimentLayout>
    )
}