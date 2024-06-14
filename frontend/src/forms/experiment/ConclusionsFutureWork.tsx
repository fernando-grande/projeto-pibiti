import { useFormContext } from "../../hooks/useFormContext"

export function ConclusionsFutureWork() {
    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">CONCLUSIONS AND FUTURE WORK</p>

            <label htmlFor="conclusionsFutureWork-summary">Summary: </label>
            <input id="conclusionsFutureWork-summary" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('conclusionsFutureWork.summary')} />
            {errors.conclusionsFutureWork?.summary && <span>{errors.conclusionsFutureWork.summary.message}</span>}

            <label htmlFor="conclusionsFutureWork-impact">Impact: </label>
            <input id="conclusionsFutureWork-impact" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('conclusionsFutureWork.impact')} />
            {errors.conclusionsFutureWork?.impact && <span>{errors.conclusionsFutureWork.impact.message}</span>}

            <label htmlFor="conclusionsFutureWork-futureWork">Future Work: </label>
            <input id="conclusionsFutureWork-futureWork" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('conclusionsFutureWork.futureWork')} />
            {errors.conclusionsFutureWork?.futureWork && <span>{errors.conclusionsFutureWork.futureWork.message}</span>}

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>
        </div>
    )
}