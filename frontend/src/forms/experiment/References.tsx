import { useFormContext } from "../../hooks/useFormContext"

export function References() {
    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">REFERENCES</p>

            <label htmlFor="references-references">References: </label>
            <input id="references-references" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('references.references')} />
            {errors.references?.references && <span>{errors.references.references.message}</span>}

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>
        </div>
    )
}