import { useFormContext } from "../../hooks/useFormContext"

export function Evaluation() {
    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">EVALUATION</p>

            <label htmlFor="evaluation-theAuthorsConcernedEvaluatingTheQuality">The Authors Concerned Evaluating the Quality? </label>
            <input id="evaluation-theAuthorsConcernedEvaluatingTheQuality" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('evaluation.theAuthorsConcernedEvaluatingTheQuality')} />
            {errors.evaluation?.theAuthorsConcernedEvaluatingTheQuality && <span>{errors.evaluation.theAuthorsConcernedEvaluatingTheQuality.message}</span>}

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>
        </div>
    )
}