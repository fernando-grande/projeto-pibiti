import { useFormContext } from "../../hooks/useFormContext";
import { ExperimentLayout } from "../../layouts/forms/ExperimentLayout";

export function ExecutionSelection() {

    const { register, prevForm, errors } = useFormContext()

    return (
        <ExperimentLayout>
            <p className="font-bold text-2xl mb-6">EXECUTION</p>

            <label htmlFor="executionSelection-preparation">Preparation: </label>
            <input id="executionSelection-preparation" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.preparation')} />
            {errors.executionSelection?.preparation && <span>{errors.executionSelection.preparation.message}</span>}

            <label htmlFor="executionSelection-deviations">Deviations: </label>
            <input id="executionSelection-deviations" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.deviations')} />
            {errors.executionSelection?.deviations && <span>{errors.executionSelection.deviations.message}</span>}

            <label htmlFor="executionSelection-pilotProjectCarriedOut">Pilot Project was carried out? </label>
            <input id="executionSelection-pilotProjectCarriedOut" type="checkbox" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.pilotProjectCarriedOut')} />
            {errors.executionSelection?.pilotProjectCarriedOut && <span>{errors.executionSelection.pilotProjectCarriedOut.message}</span>}

            <label htmlFor="executionSelection-howManyPilotProjectCarriedOut">How many Pilot Projects were carried out? </label>
            <input id="executionSelection-howManyPilotProjectCarriedOut" className="w-96 border-[1px] p-2 rounded-md mb-6" {...register('executionSelection.howManyPilotProjectCarriedOut')} />
            {errors.executionSelection?.howManyPilotProjectCarriedOut && <span>{errors.executionSelection.howManyPilotProjectCarriedOut.message}</span>}

            <button type="button" onClick={prevForm} className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                PREV
            </button>

            <button type="submit" className="font-bold text-white mb-6 border-[1px] p-2 rounded-md bg-sky-700 w-24">
                NEXT
            </button>
        </ExperimentLayout>
    )
}