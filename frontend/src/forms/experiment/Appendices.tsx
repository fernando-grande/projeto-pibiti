import { useFormContext } from "../../hooks/useFormContext"

export function Appendices() {
    const { register, prevForm, nextForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">APPENDICES</p>

            <label htmlFor="appendices-appendices">Appendices: </label>
            <input id="appendices-appendices" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('appendices.appendices')} />
            {errors.appendices?.appendices && <span>{errors.appendices.appendices.message}</span>}

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>

        </div>
    )
}