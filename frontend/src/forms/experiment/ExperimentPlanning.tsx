import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { useFormContext } from "../../hooks/useFormContext";

export function ExperimentPlanning() {

    const { handleSubmit, register, prevForm, errors, nextForm } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={nextForm} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">EXPERIMENT PLANNING</p>

                <label htmlFor="task">Task:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.task')} />
                {errors.task && <span>{errors.task.message}</span>}

                <label htmlFor="sampleSize">Sample Size:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.sampleSize')} />
                {errors.sampleSize && <span>{errors.sampleSize.message}</span>}

                <label htmlFor="experimentalPackage">Experimental Package:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.experimentalPackage')} />
                {errors.experimentalPackage && <span>{errors.experimentalPackage.message}</span>}

                <p className="text-xl font-semibold pb-2">Hypothesis</p>

                <label htmlFor="nuleHypothesis">Nule Hypothesis:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.nuleHypothesis')} />
                {errors.nuleHypothesis && <span>{errors.nuleHypothesis.message}</span>}

                <label htmlFor="alternativeHypothesis">Alternative Hypothesis:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.alternativeHypothesis')} />
                {errors.alternativeHypothesis && <span>{errors.alternativeHypothesis.message}</span>}

                <p className="text-xl font-semibold pb-2">Variable</p>

                <label htmlFor="independentVariables">Independent Variables:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.independentVariables')} />
                {errors.independentVariables && <span>{errors.independentVariables.message}</span>}

                <label htmlFor="dependentVariables">Dependent Variables:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.dependentVariables')} />
                {errors.dependentVariables&& <span>{errors.dependentVariables.message}</span>}

                <p className="text-xl font-semibold pb-2">Paticipant/Experimental Object selection</p>

                <label htmlFor="simpleRandomSampling">Simple Random Sampling:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.simpleRandomSampling')} />
                {errors.simpleRandomSampling && <span>{errors.simpleRandomSampling.message}</span>}

                <label htmlFor="systematicSampling">Systematic Sampling:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.systematicSampling')} />
                {errors.systematicSampling && <span>{errors.systematicSampling.message}</span>}

                <label htmlFor="stratifiedRandomSampling">Stratified Random Sampling:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.stratifiedRandomSampling')} />
                {errors.stratifiedRandomSampling && <span>{errors.stratifiedRandomSampling.message}</span>}

                <label htmlFor="convenienceSampling">Convenience Sampling:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.convenienceSampling')} />
                {errors.convenienceSampling && <span>{errors.convenienceSampling.message}</span>}

                <p className="text-xl font-semibold pb-2">Experimental Design</p>

                <label htmlFor="balancing">Balancing:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.balancing')} />
                {errors.balancing && <span>{errors.balancing.message}</span>}

                <label htmlFor="block">Block:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.block')} />
                {errors.block && <span>{errors.block.message}</span>}

                <label htmlFor="randomness">Randomness:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.randomness')} />
                {errors.randomness && <span>{errors.randomness.message}</span>}

                <p className="text-xl font-semibold pb-2">Factors and Treatments</p>

                <label htmlFor="oneFactorTwoTreatments">One Factor with Two Treatments:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.oneFactorTwoTreatments')} />
                {errors.oneFactorTwoTreatments && <span>{errors.oneFactorTwoTreatments.message}</span>}

                <label htmlFor="oneFactorPlusTwoTreatments">One Factor with more than Two Treatments:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.oneFactorPlusTwoTreatments')} />
                {errors.oneFactorPlusTwoTreatments && <span>{errors.oneFactorPlusTwoTreatments.message}</span>}

                <label htmlFor="twoFactorsTwoTreatments">Two Factors with Two Treatments:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.twoFactorsTwoTreatments')} />
                {errors.twoFactorsTwoTreatments && <span>{errors.twoFactorsTwoTreatments.message}</span>}

                <label htmlFor="plusTwoFactorsEachTwoTreatments">More than Two Factors each Two Treatments:</label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.plusTwoFactorsEachTwoTreatments')} />
                {errors.plusTwoFactorsEachTwoTreatments && <span>{errors.plusTwoFactorsEachTwoTreatments.message}</span>}

                <p className="text-xl font-semibold pb-2">Experimental Material</p>

                <label htmlFor="artifact">Artifact:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.artifact')} />
                {errors.artifact && <span>{errors.artifact.message}</span>}

                <label htmlFor="materialValidation">Material Validation:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentPlanning.materialValidation')} />
                {errors.materialValidation
                 && <span>{errors.materialValidation.message}</span>}

                <button onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PREV
                </button>

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>
            </form>
        </ExperimentLayout>
    )
}