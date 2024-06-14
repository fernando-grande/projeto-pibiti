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
            {errors.documentation?.abstract?.abstractBackground && <span>{errors.documentation.abstract.abstractBackground.message}</span>}

            <label htmlFor="documentation-abstract-methods">Methods: </label>
            <input id="documentation-abstract-methods" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.methods')} />
            {errors.documentation?.abstract?.methods && <span>{errors.documentation.abstract.methods.message}</span>}

            <label htmlFor="documentation-abstract-results">Results: </label>
            <input id="documentation.abstract.results" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.results')} />
            {errors.documentation?.abstract?.results && <span>{errors.documentation.abstract.results.message}</span>}

            <label htmlFor="documentation-abstract-limitations">Limitations: </label>
            <input id="documentation-abstract-limitations" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.limitations')} />
            {errors.documentation?.abstract?.limitations && <span>{errors.documentation.abstract.limitations.message}</span>}

            <label htmlFor="documentation-abstract-conclusions">Conclusions: </label>
            <input id="documentation-abstract-conclusions" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.conclusions')} />
            {errors.documentation?.abstract?.conclusions && <span>{errors.documentation.abstract.conclusions.message}</span>}

            <label htmlFor="documentation-abstract-keywords">Keywords: </label>
            <input id="documentation-abstract-keywords" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.abstract.keywords')} />
            {errors.documentation?.abstract?.keywords && <span>{errors.documentation.abstract.keywords.message}</span>}

            <p className="text-xl font-semibold pb-2">INTRODUCTION</p>

            <label htmlFor="documentation-introduction-problemStatement">Problem Statement: </label>
            <input id="documentation-introduction-problemStatement" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.introduction.problemStatement')} />
            {errors.documentation?.introduction?.problemStatement && <span>{errors.documentation.introduction.problemStatement.message}</span>}

            <label htmlFor="documentation-introduction-researchObjectives">Research Objectives: </label>
            <input id="documentation-introduction-researchObjectives" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.introduction.researchObjectives')} />
            {errors.documentation?.introduction?.researchObjectives && <span>{errors.documentation.introduction.researchObjectives.message}</span>}

            <label htmlFor="documentation-introduction-context">Context: </label>
            <input id="documentation-introduction-context" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.introduction.context')} />
            {errors.documentation?.introduction?.context && <span>{errors.documentation.introduction.context.message}</span>}

            <p className="text-xl font-semibold pb-2">RELATED WORK</p>

            <label htmlFor="documentation-relatedWork-technologyUnderInvestigation">Technology Under Investigation: </label>
            <input id="documentation-relatedWork-technologyUnderInvestigation" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.relatedWork.technologyUnderInvestigation')} />
            {errors.documentation?.relatedWork?.technologyUnderInvestigation && <span>{errors.documentation.relatedWork.technologyUnderInvestigation.message}</span>}

            <label htmlFor="documentation-relatedWork-alternativeTechnologies">Alternative Technologies: </label>
            <input id="documentation-relatedWork-alternativeTechnologies" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.relatedWork.alternativeTechnologies')} />
            {errors.documentation?.relatedWork?.alternativeTechnologies && <span>{errors.documentation.relatedWork.alternativeTechnologies.message}</span>}

            <label htmlFor="documentation-relatedWork-relatedStudiest">Related Studies: </label>
            <input id="documentation-relatedWork-relatedStudies" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.relatedWork.relatedStudies')} />
            {errors.documentation?.relatedWork?.relatedStudies && <span>{errors.documentation.relatedWork.relatedStudies.message}</span>}

            <label htmlFor="documentation-relatedWork-relevancePractice">Relevance Practice: </label>
            <input id="documentation-relatedWork-relevancePractice" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('documentation.relatedWork.relevancePractice')} />
            {errors.documentation?.relatedWork?.relevancePractice && <span>{errors.documentation.relatedWork.relevancePractice.message}</span>}

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>
        </div>
    )
}