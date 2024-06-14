import { useFormContext } from "../../hooks/useFormContext"

export function Acknowledgements() {
    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">ACKNOWLEDGEMENTS</p>

            <label htmlFor="acknowledgments-text">Text: </label>
            <input id="acknowledgments-text" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('acknowledgments.text')} />
            {errors.acknowledgments?.text && <span>{errors.acknowledgments.text.message}</span>}

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>
        </div>
    )
}