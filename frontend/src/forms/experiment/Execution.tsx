import { useForm } from "react-hook-form";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";
import { executionSchema, ExecutionTypeSchema } from "../../libs/zod/experiments/execution";
import { zodResolver } from "@hookform/resolvers/zod";

interface ExecutionProps {
    onNext: () => void,
    onPrev: () => void,
    submitForm: (data: any) => void,
    formData: any
}

export function Execution( {onNext, onPrev, submitForm, formData }: ExecutionProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<ExecutionTypeSchema>({
        resolver: zodResolver(executionSchema),
        defaultValues: formData,
    })

    const handlePrev = () => {
        const data = Object.fromEntries(new FormData(document.querySelector("form") as HTMLFormElement).entries())
        submitForm(data)
        onPrev()
    }

    return (
        <ExperimentLayout>
            <form onSubmit={handleSubmit((data) => { submitForm(data); onNext(); })} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">EXECUTION</p>

                <label htmlFor="dataCollect">Data Collect:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('dataCollect')} />
                {errors.dataCollect && <span>{errors.dataCollect.message}</span>}

                <label htmlFor="training">Training:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('training')} />
                {errors.training && <span>{errors.training.message}</span>}

                <label htmlFor="pilotProject">Pilot Project:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('pilotProject')} />
                {errors.pilotProject && <span>{errors.pilotProject.message}</span>}

                <label htmlFor="experimentConduction">Experiment Conduction:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentConduction')} />
                {errors.experimentConduction && <span>{errors.experimentConduction.message}</span>}

                <label htmlFor="experimentConductionPlace">Experiment Conduction Place:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentConductionPlace')} />
                {errors.experimentConductionPlace && <span>{errors.experimentConductionPlace.message}</span>}

                <label htmlFor="experimentConductionDate">Experiment Conduction Date:</label>
                <input type="date" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('experimentConductionDate')} />
                {errors.experimentConductionDate && <span>{errors.experimentConductionDate.message}</span>}

                <button onClick={handlePrev} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PREV
                </button>

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>
            </form>
        </ExperimentLayout>
    )
}