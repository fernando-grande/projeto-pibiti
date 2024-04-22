import { useForm } from "react-hook-form";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { analysisSchema, AnalysisTypeSchema } from "../../libs/zod/experiments/analysis";
import { zodResolver } from "@hookform/resolvers/zod";

interface AnalysisProps {
    onNext: () => void,
    onPrev: () => void,
    submitForm: (data: any) => void,
    formData: any
}

export function Analysis({ onNext, onPrev, submitForm, formData }: AnalysisProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<AnalysisTypeSchema>({
        resolver: zodResolver(analysisSchema),
        defaultValues: formData,
    })

    const handlePrev = () => {
        const data = Object.fromEntries(new FormData(document.querySelector("form") as HTMLFormElement).entries())
        submitForm(data)
        onPrev()
    }

    return (
        <ExperimentLayout>
            <form onSubmit={handleSubmit((data) => { submitForm(data); onNext(); })} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">ANALYSIS</p>

                <label htmlFor="implicationTreatmentDeveloped">Implication of the Treatment Developed:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('implicationTreatmentDeveloped')} />
                {errors.implicationTreatmentDeveloped && <span>{errors.implicationTreatmentDeveloped.message}</span>}

                <label htmlFor="mortalityRate">Mortality Rate:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('mortalityRate')} />
                {errors.mortalityRate && <span>{errors.mortalityRate.message}</span>}

                <p>Threats to Validity</p>

                <label htmlFor="conclusionValidity">Conclusion Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('conclusionValidity')} />
                {errors.conclusionValidity && <span>{errors.conclusionValidity.message}</span>}

                <label htmlFor="constructoValidity">Constructo Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('constructoValidity')} />
                {errors.constructoValidity && <span>{errors.constructoValidity.message}</span>}

                <label htmlFor="externalValidity">External Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('externalValidity')} />
                {errors.externalValidity && <span>{errors.externalValidity.message}</span>}

                <label htmlFor="internalValidity">Internal Validity:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('internalValidity')} />
                {errors.internalValidity && <span>{errors.internalValidity.message}</span>}

                <p>Data Analysis</p>

                <label htmlFor="effectSize">Effect Size:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('effectSize')} />
                {errors.effectSize && <span>{errors.effectSize.message}</span>}

                <label htmlFor="statisticalTool">Statistical Tool:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('statisticalTool')} />
                {errors.statisticalTool && <span>{errors.statisticalTool.message}</span>}

                <label htmlFor="descriptiveStatistics">Descriptive Statistics:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('descriptiveStatistics')} />
                {errors.descriptiveStatistics && <span>{errors.descriptiveStatistics.message}</span>}

                <label htmlFor="correlation">Correlation:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('correlation')} />
                {errors.correlation && <span>{errors.correlation.message}</span>}

                <label htmlFor="hypothesisTest">Hypothesis Test:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('hypothesisTest')} />
                {errors.hypothesisTest && <span>{errors.hypothesisTest.message}</span>}

                <label htmlFor="normalityTest">Normality Test:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('normalityTest')} />
                {errors.normalityTest && <span>{errors.normalityTest.message}</span>}

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>

                <button onClick={handlePrev} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PREV
                </button>

            </form>
        </ExperimentLayout>
    )
}