import { useFormContext } from "../../hooks/useFormContext";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";

export function Execution() {

    const { handleSubmit, register, prevForm, errors, nextForm } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={nextForm} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">EXECUTION</p>

                <label htmlFor="dataCollect">Data Collect:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('execution.dataCollect')} />
                {errors.dataCollect && <span>{errors.dataCollect.message}</span>}

                <label htmlFor="training">Training:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('execution.training')} />
                {errors.training && <span>{errors.training.message}</span>}

                <label htmlFor="pilotProject">Pilot Project:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('execution.pilotProject')} />
                {errors.pilotProject && <span>{errors.pilotProject.message}</span>}

                <label htmlFor="experimentConduction">Experiment Conduction:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('execution.experimentConduction')} />
                {errors.experimentConduction && <span>{errors.experimentConduction.message}</span>}

                <label htmlFor="experimentConductionPlace">Experiment Conduction Place:</label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('execution.experimentConductionPlace')} />
                {errors.experimentConductionPlace && <span>{errors.experimentConductionPlace.message}</span>}

                <label htmlFor="experimentConductionStartDate">Experiment Conduction Start Date:</label>
                <input type="date" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('execution.experimentConductionStartDate')} />
                {errors.experimentConductionStartDate && <span>{errors.experimentConductionStartDate.message}</span>}

                <label htmlFor="experimentConductionFinalDate">Experiment Conduction Final Date:</label>
                <input type="date" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('execution.experimentConductionFinalDate')} />
                {errors.experimentConductionFinalDate && <span>{errors.experimentConductionFinalDate.message}</span>}

                <button onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    PREV
                </button>

                <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                    NEXT
                </button>
            </form>
        </ExperimentLayout>
    )
}