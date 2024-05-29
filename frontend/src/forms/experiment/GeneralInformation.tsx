import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { useFormContext } from "../../hooks/useFormContext";

export function GeneralInformation() {

    const { handleSubmit, register, errors, nextForm } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={nextForm} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">GENERAL INFORMATION</p>

                <label htmlFor="authorsName">Authors Name:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('generalInfo.authorsName')}/>
                {errors.authorsName && <span>{errors.authorsName.message}</span>}

                <label htmlFor="university">University:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('generalInfo.university')}/>
                {errors.university && <span>{errors.university.message}</span>}

                <label htmlFor="addres">Adress: (Optional)</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('generalInfo.addres')}/>
                {errors.addres && <span>{errors.addres.message}</span>}

                <label htmlFor="contactEmail">Contact Email: (Optional)</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('generalInfo.contactEmail')}/>
                {errors.contactEmail && <span>{errors.contactEmail.message}</span>}

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>
            </form>
        </ExperimentLayout>
    )
}