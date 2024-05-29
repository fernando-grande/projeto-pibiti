import { useFormContext } from "../../hooks/useFormContext";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";

export function Analysis() {

    const { handleSubmit, register, prevForm, errors, nextForm } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={nextForm} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">ANALYSIS</p>

                <label htmlFor="implicationTreatmentDeveloped">Implication of the Treatment Developed:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.implicationTreatmentDeveloped')} />
                {errors.implicationTreatmentDeveloped && <span>{errors.implicationTreatmentDeveloped.message}</span>}

                <label htmlFor="mortalityRate">Mortality Rate:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.mortalityRate')} />
                {errors.mortalityRate && <span>{errors.mortalityRate.message}</span>}

                <p className="text-xl font-semibold pb-2">Threats to Validity</p>

                <label htmlFor="conclusionValidity">Conclusion Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.conclusionValidity')} />
                {errors.conclusionValidity && <span>{errors.conclusionValidity.message}</span>}

                <label htmlFor="constructoValidity">Constructo Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.constructoValidity')} />
                {errors.constructoValidity && <span>{errors.constructoValidity.message}</span>}

                <label htmlFor="externalValidity">External Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.externalValidity')} />
                {errors.externalValidity && <span>{errors.externalValidity.message}</span>}

                <label htmlFor="internalValidity">Internal Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.internalValidity')} />
                {errors.internalValidity && <span>{errors.internalValidity.message}</span>}

                <p className="text-xl font-semibold pb-2">Data Analysis</p>

                <label htmlFor="effectSize">Effect Size:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.effectSize')} />
                {errors.effectSize && <span>{errors.effectSize.message}</span>}

                <label htmlFor="statisticalTool">Statistical Tool:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.statisticalTool')} />
                {errors.statisticalTool && <span>{errors.statisticalTool.message}</span>}

                <label htmlFor="descriptiveStatistics">Descriptive Statistics:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.descriptiveStatistics')} />
                {errors.descriptiveStatistics && <span>{errors.descriptiveStatistics.message}</span>}

                <p className="text-xl font-semibold pb-2">Inferential Statistics</p>

                <label htmlFor="correlation">Correlation:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.correlation')} />
                {errors.correlation && <span>{errors.correlation.message}</span>}

                <label htmlFor="hypothesisTest">Hypothesis Test:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.hypothesisTest')} />
                {errors.hypothesisTest && <span>{errors.hypothesisTest.message}</span>}

                <label htmlFor="normalityTest">Normality Test:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.normalityTest')} />
                {errors.normalityTest && <span>{errors.normalityTest.message}</span>}

                <label htmlFor="inferentialStatisticsDescription">Describe the utilization of the Inferential Statistics Method:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('analysis.inferentialStatisticsDescription')} />
                {errors.inferentialStatisticsDescription && <span>{errors.inferentialStatisticsDescription.message}</span>}

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>

                <button onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PREV
                </button>

            </form>
        </ExperimentLayout>
    )
}