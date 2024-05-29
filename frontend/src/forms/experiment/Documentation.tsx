import { useFormContext } from "../../hooks/useFormContext";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";

export function Documentation() {

    const { handleSubmit, register, prevForm, errors } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={handleSubmit} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">DOCUMENTATION</p>

                <label htmlFor="domain">Domain:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.domain')} />
                {errors.domain && <span>{errors.domain.message}</span>}

                <label htmlFor="goal">Goal:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.goal')} />
                {errors.goal && <span>{errors.goal.message}</span>}

                <label htmlFor="result">Result:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.result')} />
                {errors.result && <span>{errors.result.message}</span>}

                <label htmlFor="experimentalTemplate">Experimental Template:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.experimentalTemplate')} />
                {errors.experimentalTemplate && <span>{errors.experimentalTemplate.message}</span>}

                <button onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PREV
                </button>

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    SUBMIT
                </button>
            </form>
        </ExperimentLayout>
    )
}