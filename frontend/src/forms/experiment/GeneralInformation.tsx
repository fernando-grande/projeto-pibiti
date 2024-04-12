import { zodResolver } from "@hookform/resolvers/zod";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { generalInfoSchema, GeneralInfoTypeSchema } from "../../libs/zod/experiments/generalInformation";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

interface generalInformationProps {
    onNext: () => void
}

export function GeneralInformation({onNext}: generalInformationProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<GeneralInfoTypeSchema>({
        resolver: zodResolver(generalInfoSchema),
    })

    return (
        <ExperimentLayout>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">GENERAL INFORMATION</p>

                <label htmlFor="authorsName">Authors Name:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('authorsName')} value={values.authorsName} />
                {errors.authorsName && <span>{errors.authorsName.message}</span>}

                <label htmlFor="university">University:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('university')} value={values.university}/>
                {errors.university && <span>{errors.university.message}</span>}

                <label htmlFor="addres">Adress: (Optional)</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('addres')} value={values.addres}/>
                {errors.addres && <span>{errors.addres.message}</span>}

                <label htmlFor="contactEmail">Contact Email: (Optional)</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('contactEmail')} value={values.contactEmail}/>
                {errors.contactEmail && <span>{errors.contactEmail.message}</span>}

                <button onClick={onNext} type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>

            </form>
        </ExperimentLayout>
    )
}