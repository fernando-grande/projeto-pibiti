import { useFormContext } from "../../hooks/useFormContext"

export function Package() {
    const { register, prevForm, errors } = useFormContext()

    return (
        <div className="flex flex-col">
            <p className="font-bold text-2xl mb-6">PACKAGE</p>

            <label htmlFor="package-isExperimentalPackageInformed">The Experimental Package is Informed? </label>
            <input id="package-isExperimentalPackageInformed" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('package.isExperimentalPackageInformed')} />
            {errors.package?.isExperimentalPackageInformed && <span>{errors.package.isExperimentalPackageInformed.message}</span>}

            <label htmlFor="package-url">Package url: </label>
            <input id="package-url"  className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('package.url')} />
            {errors.package?.url && <span>{errors.package.url.message}</span>}

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                SUBMIT
            </button>

        </div>
    )
}