import { useFormContext } from "../../hooks/useFormContext";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";

export function Documentation() {

    const { handleSubmit, register, prevForm, errors } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={handleSubmit} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">DOCUMENTATION</p>

                <label htmlFor="documentation.useTemplate">Use Template? </label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.useTemplate')} />
                {errors.documentation?.useTemplate && <span>{errors.documentation.useTemplate.message}</span>}

                <label htmlFor="documentation.template">Template Used: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
                {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

                <label htmlFor="result">Observations about the template used: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.observationsAboutTemplateUsed')} />
                {errors.documentation?.observationsAboutTemplateUsed && <span>{errors.documentation.observationsAboutTemplateUsed.message}</span>}

                <p className="text-xl font-semibold pb-2">ABSTRACT</p>

                <label htmlFor="documentation.template">Objective:  </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.objective')} />
                {errors.documentation?.abstract?.objective && <span>{errors.documentation.abstract.objective.message}</span>}

                <label htmlFor="documentation.template">Abstract backgound: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
                {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

                <label htmlFor="documentation.template">Methods: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
                {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

                <label htmlFor="documentation.template">Results: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
                {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

                <label htmlFor="documentation.template">Limitations: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
                {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

                <label htmlFor="documentation.template">Conclusions: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
                {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

                <label htmlFor="documentation.template">Keywords: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
                {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

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