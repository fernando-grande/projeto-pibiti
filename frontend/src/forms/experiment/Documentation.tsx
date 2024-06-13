import { useFormContext } from "../../hooks/useFormContext";

export function Documentation() {

    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col"> 
            <p className="font-bold text-2xl mb-6">DOCUMENTATION</p>

            <label htmlFor="documentation-useTemplate">Use Template? </label>
            <input id="documentation-useTemplate" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.useTemplate')} />
            {errors.documentation?.useTemplate && <span>{errors.documentation.useTemplate.message}</span>}

            <label htmlFor="documentation-template">Template Used: </label>
            <input id="documentation-template" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.template')} />
            {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

            <label htmlFor="documentation-observationsAboutTemplateUsed">Observations about the template used: </label>
            <input id="documentation-observationsAboutTemplateUsed" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.observationsAboutTemplateUsed')} />
            {errors.documentation?.observationsAboutTemplateUsed && <span>{errors.documentation.observationsAboutTemplateUsed.message}</span>}

            <p className="text-xl font-semibold pb-2">ABSTRACT</p>

            <label htmlFor="documentation-abstract-objective">Objective:  </label>
            <input id="documentation-abstract-objective" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.objective')} />
            {errors.documentation?.abstract?.objective && <span>{errors.documentation.abstract.objective.message}</span>}

            <label htmlFor="documentation-abstract-abstractBackground">Abstract backgound: </label>
            <input id="documentation-abstract-abstractBackground" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.abstractBackground')} />
            {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

            <label htmlFor="documentation-abstract-methods">Methods: </label>
            <input id="documentation-abstract-methods" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.methods')} />
            {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

            <label htmlFor="documentation-abstract-results">Results: </label>
            <input id="documentation.abstract.results" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.results')} />
            {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

            <label htmlFor="documentation-abstract-limitations">Limitations: </label>
            <input id="documentation-abstract-limitations" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.limitations')} />
            {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

            <label htmlFor="documentation-abstract-conclusions">Conclusions: </label>
            <input id="documentation-abstract-conclusions" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.conclusions')} />
            {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

            <label htmlFor="documentation-abstract-keywords">Keywords: </label>
            <input id="documentation-abstract-keywords" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.keywords')} />
            {errors.documentation?.template && <span>{errors.documentation.template.message}</span>}

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                SUBMIT
            </button>
        </div>
    )
}