import { useFormContext } from "../../hooks/useFormContext";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";

export function ExecutionSelection() {

    const { handleSubmit, register, prevForm, errors, nextForm } = useFormContext()

    return (
        <ExperimentLayout>
            <form onSubmit={nextForm} className="flex flex-col m-12 h-auto bg-white rounded-md px-6 py-4 border-[1px]">
                <p className="font-bold text-2xl mb-6">EXECUTION</p>

                <label htmlFor="executionSelection.preparation">Preparation: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.preparation')} />
                {errors.executionSelection?.preparation && <span>{errors.executionSelection.preparation.message}</span>}

                <label htmlFor="executionSelection.deviations">Deviations: </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.deviations')} />
                {errors.executionSelection?.deviations && <span>{errors.executionSelection.deviations.message}</span>}

                <label htmlFor="executionSelection.pilotProjectCarriedOut">Pilot Project was carried out? </label>
                <input type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.pilotProjectCarriedOut')} />
                {errors.executionSelection?.pilotProjectCarriedOut && <span>{errors.executionSelection.pilotProjectCarriedOut.message}</span>}

                <label htmlFor="executionSelection.howManyPilotProjectCarriedOut">How many Pilot Projects were carried out? </label>
                <input className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.howManyPilotProjectCarriedOut')} />
                {errors.executionSelection?.howManyPilotProjectCarriedOut && <span>{errors.executionSelection.howManyPilotProjectCarriedOut.message}</span>}

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