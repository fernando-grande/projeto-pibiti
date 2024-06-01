import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { useFormContext } from "../../hooks/useFormContext";

export function ExperimentInformation() {

    const { handleSubmit, register, errors, nextForm } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={nextForm} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">GENERAL INFORMATION</p>

                <label htmlFor="title">Title: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}

                <label htmlFor="authorship">Authorship: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('authorship')}/>
                {errors.authorship && <span>{errors.authorship.message}</span>}

                <label htmlFor="publicationYear">Publication Year: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('publicationYear')}/>
                {errors.publicationYear && <span>{errors.publicationYear.message}</span>}

                <label htmlFor="publicationType">Publication Type: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('publicationType')}/>
                {errors.publicationType && <span>{errors.publicationType.message}</span>}

                <label htmlFor="publicationVenue">Publication Venue: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('publicationVenue')}/>
                {errors.publicationVenue && <span>{errors.publicationVenue.message}</span>}

                <label htmlFor="pagesNumber">Pages Number: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('pagesNumber')}/>
                {errors.pagesNumber && <span>{errors.pagesNumber.message}</span>}

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>
            </form>
        </ExperimentLayout>
    )
}